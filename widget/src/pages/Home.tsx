import { FunctionComponent, h } from 'preact'
import CompanyTitle from '../components/CompanyTitle'
import Layout from '../layouts/DefaultLayout'
import Message from '../modules/messaging/components/Message'
import MessageAvatar from '../modules/messaging/components/MessageAvatar'
import MessageBubble from '../modules/messaging/components/MessageBubble'
import MessageList from '../modules/messaging/components/MessageList'
import MessageForm from '../modules/messaging/containers/MessageForm'

const Home: FunctionComponent = () => {
  const onSubmit = (text: string) => {
    console.log(text)
  }

  return (
    <Layout
      header={
        <CompanyTitle
          name="Gruut"
          imgSrc="https://github.com/snamoah/gruut/raw/main/public/icons/mstile-150x150.png"
        />
      }
      footer={<MessageForm onSubmit={onSubmit} />}
    >
      <MessageList>
        <Message>
          <MessageAvatar
            online={true}
            imgSrc="https://github.com/snamoah/snamoah.dev/raw/main/src/images/sam_mobile.png"
            name="Samuel Amoah"
            date={new Date()}
          />
          <MessageBubble position="left">
            Howdy, is there something I can help you with today?
          </MessageBubble>
        </Message>
        <Message>
          <MessageBubble position="left">Just let me know</MessageBubble>
        </Message>
        <Message>
          <MessageBubble position="right">
            Hello Samuel, I would like to make an enquiry about what we spoke about the
            last time. My stuff isn’t working and coming at all. I need a new machine
          </MessageBubble>
        </Message>
        <Message>
          <MessageAvatar
            online={true}
            imgSrc="https://github.com/snamoah/snamoah.dev/raw/main/src/images/sam_mobile.png"
            name="Samuel Amoah"
            date={new Date()}
          />
          <MessageBubble position="left">
            Alright, sure thing... did you try the points one and two from our
            documentations?
          </MessageBubble>
        </Message>
        <Message>
          <MessageBubble position="right">
            No, I tried that but that didn't lead me anywhere. Please help me. I don't
            know what to do and I have a tight deadline
          </MessageBubble>
        </Message>
      </MessageList>
    </Layout>
  )
}

export default Home
