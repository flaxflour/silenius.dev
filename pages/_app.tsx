import { AppProps } from 'next/app'
import { theme } from '../theme'
import { Center, ChakraProvider } from '@chakra-ui/react'
import { ThemeSwitch } from '../components'

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Center h="100vh" px="2" flexDirection="column">
        <ThemeSwitch />
        <Component {...pageProps} />
      </Center>
    </ChakraProvider>
  )
}

export default App
