import React, { useEffect, useState } from 'react';
import { Flex, Spacer, Grid, Center, Text, useToast, Input, Stack } from '@chakra-ui/react';
import { PokemonCard } from './components/PokemonCard';
import { useSelector, useDispatch } from 'react-redux';

import { getCachedAllPokemons, getCachedMyPokemons } from '../common/actions';
import { CACHED_ALL_POKEMON_KEY, CACHED_MY_POKEMON_KEY } from '../../constants';
import { fetchPokemons } from './actions';

export default function PokemonList (props) {
  const pokemonList = useSelector((state) => state.pokemon.pokemonList);
  const pagination = useSelector((state) => state.pokemon.pagination);

  const dispatch = useDispatch();
  const toast = useToast();

  const [search, setSearch] = useState('');
  const [myPokemonList, setMyPokemonList] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => setSearch(event.target.value)

  useEffect(() => {
    if (!pokemonList.length) {
      cacheAllPokemons();
    }
    setMyPokemonList(getCachedMyPokemons());
  }, []);

  const cacheAllPokemons = async() => {
    setLoading(true);
    let response = null;
    let offset = 0;
    let limit = 2000;
    await fetchPokemons(limit, offset, dispatch);
    setLoading(false);
  }

  const removeFromMyList = async(items, item) => {
    let data = items.filter((o) => o.name !== item.name);
    localStorage.setItem(CACHED_MY_POKEMON_KEY, JSON.stringify(data));
    await setMyPokemonList(data);
  }

  const addToMyList = async(items, item) => {
    if (items.length === 6) {
      toast({
          title: "Action rejected",
          description: "Already added 6 pokemons to team!",
          status: "error",
          duration: 5000,
          isClosable: true,
        })
      return;
    }
    let data = [...items, item];
    localStorage.setItem(CACHED_MY_POKEMON_KEY, JSON.stringify(data));
    await setMyPokemonList(data);
  }

  const filter = (items) => {
    return items.filter((item) => item.name.includes(search));
  }

  const details = (name) => {
    props.history.push(`/pokemons/${name}`);
  }

  return (
    <Stack>
      <Input placeholder="Search here.." size="lg" value={search} onChange={handleChange} />
      {
        loading &&
        <Center>
          <Text color={'gray.500'} fontSize={'md'}>
            Please wait while caching the data...
          </Text>
        </Center>
      }
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
      {
        filter(pokemonList).map((item, i) => {
          return <PokemonCard
                  key={item.name}
                  item={item}
                  myPokemonList={myPokemonList}
                  removeFromMyList={() => removeFromMyList(myPokemonList, item)}
                  addToMyList={() => addToMyList(myPokemonList, item)}
                  details={details}/>
        })
      }
      </Grid>
    </Stack>
  )
}
