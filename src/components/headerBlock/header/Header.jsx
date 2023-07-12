import React from 'react';
import { Logo } from '../logo/Logo';
import { Menu } from '../menu/Menu';
import s from './header.module.css';
import { Search } from '../search/Search';

export const Header = () => {
  return (
    <div className={s['header']} id='header'>
      <Logo />
      <Menu />
      <Search />
    </div>
  );
};
