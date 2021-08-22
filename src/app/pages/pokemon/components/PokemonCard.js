import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button
} from '@chakra-ui/react';

export const PokemonCard = ({item, myPokemonList, addToMyList, removeFromMyList, details}) => {
    const isAddedToMyList = myPokemonList.filter((o) => o.name === item.name).length ? true : false;
    return (
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Stack align={'center'}>
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
              Pokemon
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
              {item.name}
            </Heading>
            <Stack align={'center'}>
            <Center p={2}>
              <Button
                w={'full'}
                maxW={'md'}
                colorScheme={isAddedToMyList ? 'red' : 'messenger'}
                onClick={() => isAddedToMyList ? removeFromMyList() : addToMyList()}>
                <Center>
                  <Text>{isAddedToMyList ? 'Remove From My Team' : 'Add To My Team'}</Text>
                </Center>
              </Button>
            </Center>
            <Center p={2}>
              <Button
                w={'full'}
                maxW={'md'}
                onClick={() => details(item.name)}>
                <Center>
                  <Text>Show Details</Text>
                </Center>
              </Button>
            </Center>
            </Stack>
          </Stack>
        </Box>
    )
}
