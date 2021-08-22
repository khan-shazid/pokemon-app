import React, { useState, useEffect } from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
} from '@chakra-ui/react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

import { TagsWithTitle } from './components/TagsWithTitle';
import { fetchDetails } from './actions';

const PokemonDetails = () => {
  let { name } = useParams();
  let [pokemon, setPokemon] = useState(null);
  useEffect(async() => {
    let response = await fetchDetails(name);
    setPokemon(response);
  }, []);

  return (
    <Container maxW={'7xl'} p="12">
      <Heading as="h1">{pokemon ? pokemon.name.toUpperCase() : ''}</Heading>
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                borderRadius="lg"
                src={getImage(pokemon)}
                alt={pokemon ? pokemon.name : ''}
                objectFit="contain"
              />
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)'
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          <Heading marginTop="1">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              Weight: {pokemon ? pokemon.weight : ''}
            </Link>
          </Heading>
          <TagsWithTitle title='Abilities' tags={getAbilities(pokemon)}/>
          <TagsWithTitle title='Game Indices' tags={getIndices(pokemon)}/>
          <TagsWithTitle title='Moves' tags={getMoves(pokemon)}/>
          <TagsWithTitle title='Types' tags={getTypes(pokemon)}/>
          <TagsWithTitle title='Stats' tags={getStats(pokemon)}/>
        </Box>
      </Box>
    </Container>
  );
};

const getImage = (pokemon) => {
  if (!pokemon) return null;
  return pokemon.sprites.other['official-artwork'].front_default;
}

const getAbilities = (pokemon) => {
  if (!pokemon) return [];
  return pokemon.abilities.map((o) => {
    return o.ability.name;
  })
}

const getIndices = (pokemon) => {
  if (!pokemon) return [];
  return pokemon.game_indices.map((o) => {
    return o.version.name;
  })
}

const getMoves = (pokemon) => {
  if (!pokemon) return [];
  return pokemon.moves.map((o) => {
    return o.move.name;
  })
}

const getTypes = (pokemon) => {
  if (!pokemon) return [];
  return pokemon.types.map((o) => {
    return o.type.name;
  })
}

const getStats = (pokemon) => {
  if (!pokemon) return [];
  return pokemon.stats.map((o) => {
    return `${o.stat.name} - Base(${o.base_stat}) Effort(${o.effort})`;
  })
}

export default PokemonDetails;
