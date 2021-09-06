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
        Photos courtesy of{' '}
        <Link href="https://kunalbotla.com">Kunal Botla</Link> (
        <Link href="https://github.com/kunalbotla/photos/blob/main/README.md">
          LICENSE
        </Link>
        ).
      </Text>
    </Container>
  )
}
