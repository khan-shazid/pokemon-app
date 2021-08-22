import React, { useEffect, useState } from 'react';
import { Grid, Center, Text, Stack } from '@chakra-ui/react';
import { PokemonCard } from './components/PokemonCard';

import { getCachedMyPokemons } from '../common/actions';
import { CACHED_MY_POKEMON_KEY } from '../../constants';

export default function MyPokemonList (props) {

  const [myPokemonList, setMyPokemonList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMyPokemonList(getCachedMyPokemons());
  }, []);

  const removeFromMyList = async(items, item) => {
    let data = items.filter((o) => o.name !== item.name);
    localStorage.setItem(CACHED_MY_POKEMON_KEY, JSON.stringify(data));
    await setMyPokemonList(data);
  }

  const details = (name) => {
    props.history.push(`/pokemons/${name}`);
  }

  return (
    <Stack>
      {
        !myPokemonList.length &&
        <Center>
          <Text color={'gray.500'} fontSize={'md'}>
            No pokemon available
          </Text>
        </Center>
      }
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
      {
        myPokemonList.map((item, i) => {
          return <PokemonCard
                  key={item.name}
                  item={item}
                  myPokemonList={myPokemonList}
                  removeFromMyList={() => removeFromMyList(myPokemonList, item)}
                  addToMyList={() => {}}
                  details={details}/>
        })
      }
      </Grid>
    </Stack>
  )
}
