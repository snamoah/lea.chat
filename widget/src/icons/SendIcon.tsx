import { h } from 'preact'
import IconComponent from './IconComponent'

const Send = IconComponent({
  size: 28,
  svg: () => (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.89442 27.5528L26.4223 15.7889C27.8964 15.0518 27.8964 12.9482 26.4223 12.2112L2.89442 0.44721C1.56462 -0.217677 0 0.749303 0 2.23609V12.3834L7 14L0 15.6166V25.764C0 27.2507 1.56462 28.2177 2.89442 27.5528Z"
    />
  ),
})

export default Send
