import React from 'react'
import IconComponent from './IconComponent'

const Dashboard = IconComponent({
  size: 50,
  svg() {
    return (
      <>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48.8924 26.7912C50.3664 26.0541 50.3664 23.9505 48.8924 23.2135L2.89445 0.213738C1.56465 -0.451187 0 0.515808 0 2.00258V22.1748L12.243 25.0023L0 27.8298V48.002C0 49.4888 1.56465 50.4558 2.89445 49.7909L48.8924 26.7912Z"
        />
      </>
    )
  },
})

export default Dashboard
