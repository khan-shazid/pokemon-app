import {
  Tag,
  Grid,
} from '@chakra-ui/react';

export const Tags = ({tags, seeMoreFlag}) => {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={2}>
    {tags.map((tag, i) => {
      if (!seeMoreFlag && i > 4) return <></>;
      return (
        <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
          {tag}
        </Tag>
      );
    })}
    </Grid>
  )
};
