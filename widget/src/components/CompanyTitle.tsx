import { h } from 'preact'
import styles from '../styles/CompanyTitle.css'

interface CompanyTitleProps {
  imgSrc: string
  name: string
}
const CompanyTitle = ({ imgSrc, name }: CompanyTitleProps) => (
  <div className={styles.container}>
    <img src={imgSrc} width="50" height="50" alt={`${name} Logo`} />
    <h3>{name}</h3>
  </div>
)

export default CompanyTitle
