import React from 'react'
import Logo from '../header/Logo';
import Menu from '../header/Menu';
import Sns from '../header/Sns';

/**
 * role이란?
 *  웹표준을 지켜주기 위해서 이 사이트의 역할을 나타나게 해줌
 */
const Header = () => {
  return (
    <header id='header' role='banner'>
        <Logo />
        <Menu />
        <Sns />
    </header>
  )
}

export default Header