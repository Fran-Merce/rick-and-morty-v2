import React from 'react'
import { LayoutStyled } from './LayoutStyled';

interface Props {
  children: React.ReactNode | React.ReactNode[]
}


export const Layout = ({children}:Props) => {
  return (
    <LayoutStyled>{children}</LayoutStyled>
  )
}
