import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          {/* <Logo h="40vmin" pointerEvents="none" /> */}
          <Text fontSize="5xl">
            Hi.
          </Text>
          <Text fontSize="3xl">
            I'm getting things ready for everyone. Check back soon!
          </Text>
          <Link
            color="green.500"
            href="https://github.com/ashsobeck"
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            My GitHub
          </Link>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)
