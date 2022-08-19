import { Box } from '@chakra-ui/react'
import { colors } from 'src/styles/colors'

export const Header = () => {
  return (
    <Box backgroundColor={colors.background.main} h="44px">
      <p>ヘッダー</p>
    </Box>
  )
}
