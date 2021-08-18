import clsx from 'clsx'
import { h, FunctionalComponent } from 'preact'
import { useState } from 'preact/hooks'
import FloatingButton from './components/FloatingButton'
import Home from './pages/home'
import { Route, Router } from './Router'
import styles from './styles/global.css'

// import Home from './pages/home'

const routes = {
  '/': Home,
}

const App: FunctionalComponent = () => {
  const [active, setActive] = useState(false)

  return (
    <div className={clsx(styles.root, styles.container, styles.bottom, styles.right)}>
      {active && (
        <Router>
          <Route component={Home} path="/" />
        </Router>
      )}
      <FloatingButton active={active} onClick={() => setActive((active) => !active)} />
    </div>
  )
}

export default App
