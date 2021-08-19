import React, { FC } from 'react'
import styled from '@emotion/styled'
import logoImg from '../../../assets/images/logo.svg'

interface LogoProps {
  href?: string
}

const Link = styled.a`
  outline: none;
  cursor: ${({ href }) => (href ? 'pointer' : 'default')};
`
const Logo: FC<LogoProps> = ({ href }: LogoProps) => (
  <Link href={href}>
    <img src={logoImg} />
  </Link>
)

export default Logo
