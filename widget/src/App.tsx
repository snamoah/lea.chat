import { h, FunctionalComponent } from 'preact'
import { useState } from 'preact/hooks'
import FloatingButton from './components/FloatingButton'

// import Home from './pages/home'

const App: FunctionalComponent = () => {
  const [active, setActive] = useState(false)

  return <FloatingButton active={active} onClick={() => setActive((active) => !active)} />
}

export default App
