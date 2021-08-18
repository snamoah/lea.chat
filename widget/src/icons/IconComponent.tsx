import { h, VNode } from 'preact'

interface IconComponent {
  size: number
  svg: () => VNode | VNode[]
}

interface IconProps {
  size?: number
}

const IconComponent = ({ size: defaultSize, svg }: IconComponent) => {
  return (props: IconProps) => (
    <svg
      width={props.size || defaultSize}
      height={props.size || defaultSize}
      version="1.1"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      style="display: inline-block;"
      viewBox={`0 0 ${defaultSize} ${defaultSize}`}
    >
      {svg()}
    </svg>
  )
}

export default IconComponent
