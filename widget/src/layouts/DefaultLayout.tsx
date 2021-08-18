import { h, FunctionComponent } from 'preact'
import styles from '../styles/DefaultLayout.css'

const DefaultLayout: FunctionComponent = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header} />
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer} />
    </div>
  )
}

export default DefaultLayout
