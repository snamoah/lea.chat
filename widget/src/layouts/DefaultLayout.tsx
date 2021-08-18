import { h, FunctionComponent, VNode } from 'preact'
import styles from '../styles/DefaultLayout.css'

interface Props {
  footer?: VNode
}
const DefaultLayout: FunctionComponent<Props> = ({ footer, children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header} />
      <main className={styles.main}>{children}</main>
      {footer && <footer className={styles.footer}>{footer}</footer>}
    </div>
  )
}

export default DefaultLayout
