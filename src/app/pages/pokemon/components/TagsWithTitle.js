import React, { useEffect, useState } from 'react';
import {
  Heading,
  Link,
} from '@chakra-ui/react';
import { Tags } from './Tags';

export const TagsWithTitle = ({title, tags}) => {
  const [seeMoreFlag, setSeeMoreFlag] = useState(false);

  return (
    <>
      <Heading marginTop="1" marginBottom="1">
        <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
          {title}
        </Link>
      </Heading>
      <Tags tags={tags} seeMoreFlag={seeMoreFlag} />
      {
        tags.length > 4 && !seeMoreFlag && <Link onClick={() => setSeeMoreFlag(true)}>See more</Link>
      }
    </>
  )
}
