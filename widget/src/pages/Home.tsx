import { FunctionComponent, h } from 'preact'
import Layout from '../layouts/DefaultLayout'
import MessageForm from '../modules/messaging/containers/MessageForm'

const Home: FunctionComponent = () => {
  return <Layout footer={<MessageForm />} />
}

export default Home
