import AppStoreBadge from '../AppStoreBadge'
import PlayStoreBadge from '../PlayStoreBadge'

import {
  Box,
  Button,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Hidden,
  useColorModeValue,
} from 'native-base'
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'
import React, { ReactNode } from 'react'

const ListHeader = ({ children }: { children: ReactNode }) => (
  <Text
    fontWeight="500"
    fontSize="xl"
    mb={2}
  >
    {children}
  </Text>
)

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => (
  <Button
    bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
    rounded="full"
    w={8}
    h={8}
    cursor="pointer"
    href={href}
    alignItems="center"
    justifyContent="center"
    transition="background 0.3s ease"
    _hover={{ bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200') }}
  >
    {/* <Hidden>{label}</Hidden> */}
    {children}
  </Button>
)

export function LargeWithAppLinksAndSocial() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      // position="absolute"
      // bottom={{ base: -800, sm: -500, md: -270 }}
      w="full"
      alignItems="center"
    >
      <Stack
        maxW="6xl"
        py={10}
        w="full"
      >
        <SimpleGrid
          columns={{
            base: 1, sm: 2, md: 4,
          }}
          space={4}
          p={2}
        >
          <Stack
            alignItems="flex-start"
            space={2}
          >
            <ListHeader>Company</ListHeader>
            <Link href="#">About Us</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Careers</Link>
            <Link href="#">Contact Us</Link>
          </Stack>

          <Stack
            alignItems="flex-start"
            space={2}
          >
            <ListHeader>Support</ListHeader>
            <Link href="#">Help Center</Link>
            <Link href="#">Safety Center</Link>
            <Link href="#">Community Guidelines</Link>
          </Stack>

          <Stack
            alignItems="flex-start"
            space={2}
          >
            <ListHeader>Legal</ListHeader>
            <Link href="#">Cookies Policy</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Law Enforcement</Link>
          </Stack>

          <Stack
            alignItems="flex-start"
            space={2}
          >
            <ListHeader>Install App</ListHeader>
            <AppStoreBadge />
            <PlayStoreBadge />
          </Stack>
        </SimpleGrid>
      </Stack>

      <Box
        borderTopWidth={1}
        borderStyle="solid"
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Stack
          maxW="6xl"
          py={4}
          direction={{ base: 'column', md: 'row' }}
          space={4}
          justifyContent={{ md: 'space-between' }}
          alignItems={{ md: 'center' }}
        >
          <Text>© 2020 Chakra Templates. All rights reserved</Text>
          <Stack
            direction="row"
            space={6}
          >
            <SocialButton
              label="Twitter"
              href="#"
            >
              <Icon
                as={FaTwitter}
                size="sm"
              />
            </SocialButton>
            <SocialButton
              label="YouTube"
              href="#"
            >
              <Icon
                as={FaYoutube}
                size="sm"
              />
            </SocialButton>
            <SocialButton
              label="Instagram"
              href="#"
            >
              <Icon
                as={FaInstagram}
                size="sm"
              />
            </SocialButton>
          </Stack>
        </Stack>
      </Box>
    </Box>
  )
}
