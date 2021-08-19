import React, { FC } from 'react'

interface IconComponent {
  size: number
  svg: () => React.ReactNode
}

interface GenericIconProps {
  size?: number
}

const IconComponent = ({
  size: defaultSize,
  svg,
}: IconComponent): FC<GenericIconProps> => {
  const Icon = (props: GenericIconProps) => (
    <svg
      width={props.size || defaultSize}
      height={props.size || defaultSize}
      version="1.1"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${defaultSize} ${defaultSize}`}
    >
      {svg()}
    </svg>
  )

  return Icon
}

export default IconComponent
