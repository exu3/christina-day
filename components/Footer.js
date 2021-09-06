import { Container, Link, Text } from 'theme-ui'

export default function Footer() {
  return (
    <Container variant="narrow" sx={{ textAlign: 'center', pb: 4 }}>
      <Text variant="eyebrow">For Christina</Text>
      <br />
      <Text variant="eyebrow">With 💖, from Hack Club.</Text>
      <br />
      <br />
      <Text variant="caption">
        Photos by{' '}
        <Link href="https://kunalbotla.com" target="_blank" rel="noreferrer">
          Kunal Botla
        </Link>{' '}
        (
        <Link
          href="https://github.com/kunalbotla/photos/blob/main/README.md"
          target="_blank"
          rel="noreferrer"
        >
          License
        </Link>
        ). Site by{' '}
        <Link href="https://ella.cx" target="_blank" rel="noreferrer">
          @eilla1
        </Link>{' '}
        et al.
      </Text>
    </Container>
  )
}
