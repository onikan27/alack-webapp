import { Box, Flex } from '@chakra-ui/react'
import { Header } from 'src/components/pages/chat/Header'
import { Sidebar } from 'src/components/pages/chat/Sidebar'

type props = {
  children: React.ReactNode
}

export const Base = ({ children }: props) => {
  return (
    <Box w="100%">
      <Header />
      <Flex>
        <Sidebar workspaceName="Asobiba" />
        <Box overflow="scroll">{children}</Box>
      </Flex>
    </Box>
  )
}
