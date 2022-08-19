import { Box, Text, Flex } from '@chakra-ui/react'
import { colors } from 'src/styles/colors'
import { IoIosArrowDown } from 'react-icons/io'
import { IconContext } from 'react-icons'

type props = {
  workspaceName: string
}

export const Sidebar = ({ workspaceName }: props) => {
  return (
    <Box
      backgroundColor={colors.background.sub}
      w="281px"
      h="100vh"
      overflow="scroll"
    >
      <Box
        borderColor={colors.border.main}
        borderTopWidth="1px"
        borderBottomWidth="1px"
        _hover={{
          'background-color': `${colors.background.main}`,
        }}
        padding="16px"
      >
        <Flex alignItems="center">
          <Text
            fontSize="18px"
            color={colors.mono.white}
            fontWeight="900"
            mr="4px"
          >
            {workspaceName}
          </Text>
          <IconContext.Provider
            value={{ color: `${colors.mono.white}`, size: '16px' }}
          >
            <IoIosArrowDown />
          </IconContext.Provider>
        </Flex>
      </Box>
    </Box>
  )
}
