import { Box, Text, Card, Avatar, Container, Heading } from 'theme-ui'
import Masonry from 'react-masonry-css'
import { messages } from '../lib/messages.js'

const breakpointCols = {
  default: 3,
  1100: 2,
  500: 1,
}

export default function Wishes() {
  return (
    <Box sx={{ py: 4 }}>
      <Container>
        <Heading variant="title" sx={{ mb: 5 }}>
          From the community...
        </Heading>
        <Masonry
          breakpointCols={breakpointCols}
          className=""
          style={{ display: 'flex', width: 'auto' }}
        >
          {messages.map(msg => {
            return (
              <Message
                key={msg.name}
                github={msg.github}
                name={msg.name}
                note={msg.note}
                image={msg.image}
              />
            )
          })}
        </Masonry>
      </Container>
    </Box>
  )
}

function Message({ github, name, note, image }) {
  return (
    <Card as="div" sx={{ mr: 4, mb: 4 }} variant="interactive">
      {(note && (
        <>
          <Box as="div" sx={{ display: 'flex', alignItems: 'center', pb: 3 }}>
            <Avatar
              src={`https://github.com/${github}.png`}
              alt="avatar"
              w={48}
              h={48}
            />
            <Text sx={{ ml: 3, fontSize: '24px', fontWeight: 'bold' }}>
              {name}
            </Text>
          </Box>
          <Text sx={{ fontSize: '20px' }}>{note}</Text>
        </>
      )) || <img src={image} alt="Christina" style={{ width: '100%' }} />}
    </Card>
  )
}
