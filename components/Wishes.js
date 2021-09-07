import { Box, Text, Card, Avatar, Container, Heading } from 'theme-ui'
import Masonry from 'react-masonry-css'
import { messages } from '../lib/messages.js'

export default function Wishes() {
  return (
    <Box sx={{ py: 4 }}>
      <Container>
        <Heading variant="title" sx={{ mb: 5 }}>
          From the community...
        </Heading>
        <Masonry
          breakpointCols={{
            default: 3,
            1024: 3,
            640: 2,
            480: 1,
          }}
          className="masonry-items"
          columnClassName="masonry-items-column"
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
      <style jsx global key="masonry-style">{`
        .masonry-items {
          display: flex;
          width: 100%;
          max-width: 100%;
        }
        .masonry-items-column {
          background-clip: padding-box;
        }
        .card {
          margin-bottom: 15px;
        }
        .masonry-items-column:nth-child(1) {
          padding-left: 0px;
          padding-right: 0px;
        }
        .masonry-items-column:nth-child(2) {
          padding-left: 10px;
          padding-right: 0px;
        }
        @media (max-width: 640px) {
          .masonry-items-column:nth-child(1) {
            padding-left: 0px;
            padding-right: 0px;
          }
          .masonry-items-column:nth-child(2) {
            padding-left: 10px;
            padding-right: 0px;
          }
        }
        @media (min-width: 641px) {
          .masonry-items-column:nth-child(1) {
            padding-left: 0px;
            padding-right: 10px;
          }
          .masonry-items-column:nth-child(2) {
            padding-left: 3px;
            padding-right: 3px;
          }
          .masonry-items-column:nth-child(3) {
            padding-left: 10px;
            padding-right: 0px;
          }
        }
      `}</style>
    </Box>
  )
}

function Message({ github, name, note, image }) {
  return (
    <Card as="div" sx={{ mr: [0, null, null, null, 4], mb: 4 }} variant="interactive" className="card">
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
