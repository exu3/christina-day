import { Box } from 'theme-ui'
import Landing from '../components/Landing'
import Wishes from '../components/Wishes'
import Footer from '../components/Footer'

const styles = `
  ::selection {
    background-color: #ff007f;
    color: #ffffff;
    text-shadow: none;
  }
`

export default function Home() {
  return (
    <Box as="main">
      <style children={styles} />
      <Landing />
      <Wishes />
      <Footer />
    </Box>
  )
}
