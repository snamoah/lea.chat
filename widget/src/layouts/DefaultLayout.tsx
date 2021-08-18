import { h, FunctionComponent, VNode } from 'preact'
import styles from '../styles/DefaultLayout.css'

interface Props {
  footer?: VNode
  header?: VNode
}
const DefaultLayout: FunctionComponent<Props> = ({ header, footer, children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>{header}</header>
      <main className={styles.main}>{children}</main>
      {footer && <footer className={styles.footer}>{footer}</footer>}
    </div>
  )
}

export default DefaultLayout
