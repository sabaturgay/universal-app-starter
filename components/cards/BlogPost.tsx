import React from 'react'
import {
  Text,
  Box,
  Image,
  Flex,
  useColorModeValue,
  Link,
} from 'native-base'

export const BLOG_POST_ACTIONS = {
  BLOG_AUTHOR_PRESS: 'BLOG_AUTHOR_PRESS',
  BLOG_POST_PRESS: 'BLOG_POST_PRESS',
}

export const BlogPostCard = ({
  data,
  dispatch,
}) => (
  <Flex
    // bg={useColorModeValue('#F9FAFB', 'gray.600')}
    p={50}
    w="full"
    alignItems="center"
    justifyContent="center"
  >
    <Box
      w="full"
      rounded="xl"
      shadow="md"
      maxW="2xl"
      // bg="gray.200"
      _light={{ borderColor: 'darkBlue.700', borderWidth: '1' }}
      _dark={{ bg: 'darkBlue.800' }}
      // bg="primary.900"
      overflow="hidden"
    >
      <Image
        w="2xl"
        h={64}
        resizeMode="cover"
        src={data.image}
        alt="Article"
      />

      <Box p={6}>
        <Box>
          <Text
            fontSize="xs"
            textTransform="uppercase"
          >
            {data.categories[0]}
          </Text>
          <Link
            color={useColorModeValue('gray.800', 'white')}
            fontWeight="bold"
            fontSize="2xl"
            mt={2}
            _hover={{ color: 'gray.600', textDecor: 'underline' }}
            onPress={() => dispatch(BLOG_POST_ACTIONS.BLOG_POST_PRESS, data.id)}
          >
            {data.title}
          </Link>
          <Text
            mt={2}
            fontSize="sm"
            color={useColorModeValue('gray.600', 'gray.400')}
          >
            {data.description}
          </Text>
        </Box>

        <Box mt={4}>
          <Flex
            alignItems="center"
            flexDirection="row"
          >
            <Flex
              alignItems="center"
              flexDirection="row"
            >
              <Image
                boxSize={10}
                resizeMode="cover"
                rounded="full"
                src={data.author.image}
                alt="Avatar"
              />
              <Link
                mx={2}
                fontWeight="bold"
                color={useColorModeValue('gray.700', 'gray.200')}
                onPress={() => dispatch(BLOG_POST_ACTIONS.BLOG_AUTHOR_PRESS, data.author.id)}
              >
                {data.author.name}
              </Link>
            </Flex>
            <Text
              mx={1}
              fontSize="sm"
              color={useColorModeValue('gray.600', 'gray.300')}
            >
              {data.date.toString()}
            </Text>
          </Flex>
        </Box>
      </Box>
    </Box>
  </Flex>
)
