import { FunctionComponent, h } from 'preact'
import Layout from '../layouts/DefaultLayout'
import MessageForm from '../modules/messaging/containers/MessageForm'

const Home: FunctionComponent = () => {
  const onSubmit = (text: string) => {
    console.log(text)
  }

  return <Layout footer={<MessageForm onSubmit={onSubmit} />} />
}

export default Home
