import { React, useState } from 'react';
import Navbar from '../navbar/navbar.component';
import { useStore } from '../../dev-data/store';
import LoginButton from '../button-login/button-login.component';

import './header.style.css';
import CartButton from '../button-cart/button-cart.component';
const Header = () => {
  const { token, user, cart } = useStore();
  const [open, setOpen] = useState(false);

  return (
    <div className='header'>
      <h1>Pickster Hipsters</h1>
      <Navbar />
      <div>{token ? <CartButton /> : <LoginButton />}</div>
    </div>
  );
};

export default Header;
