import { Box, Container, Text, Heading } from 'theme-ui'
export default function Landing() {
  return (
    <Box>
      <Box
        sx={{
          height: '85vh',
          display: 'flex',
          flexDirection: 'column',
          pt: '20vh',
          bg: 'blue',
        }}
      >
        <Container>
          <Heading
            variant="ultratitle"
            sx={{ lineHeight: 1.5, color: 'white' }}
          >
            Happy birthday <br />
            Christina!
          </Heading>
          <br />
          <Text variant="eyebrow" sx={{ color: 'smoke' }}>
            We appreciate all you do for Hack Club. Thank you!{' '}
          </Text>
        </Container>
      </Box>
      <Box
        sx={{
          bg: 'accent',
          h: '8px',
          w: '100%',
          color: 'accent',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        hack hack hack hack hack hack hack hack hack hack hack hack hack hack
        hack hack hack hack hack hack hack hack hack hack hack hack hack hack
        hack hack hack hack hack hack hack hack hack hack hack hack hack hack
        hack hack hack hack hack hack hack hack hack hack hack hack hack hack
        hack hack hack hack hack hack hack hack hack hack hack hack hack hack
      </Box>
    </Box>
  )
}
