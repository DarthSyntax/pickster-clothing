import { React, useState } from 'react';
import { Button, Modal, Box, Typography, TextField } from '@mui/material';
import { useStore } from '../../dev-data/store';
import './button-cart.style.css';

const CartButton = () => {
  const { token, user, cart } = useStore();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div onClick={() => setOpen(true)}>{`${
        user.email.split('@')[0]
      }'s Cart Items: ${cart.length}`}</div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: 500,
            height: 200,
            bgcolor: 'background.paper',
            transform: 'translate(-50%, -50%)',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Your Cart
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            {cart.length} item(s) in your cart
            {cart.map((cartItem) => {
              return (
                <div key={cartItem.id} className='cart-items'>
                  <div className='cart-item'>
                    ${cartItem.price} {cartItem.name} x{cartItem.quantity}{' '}
                  </div>
                </div>
              );
            })}{' '}
            Total: $
            {cart.reduce(
              (total, cartItem) => total + cartItem.price * cartItem.quantity,
              0
            )}
          </Typography>
          <Button className='checkout-button' onClick={() => setOpen(false)}>
            Checkout
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default CartButton;
