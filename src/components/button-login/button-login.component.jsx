import { React, useState } from 'react';
import { Button, Modal, Box, Typography, TextField } from '@mui/material';
import { useStore } from '../../dev-data/store';

const LoginButton = () => {
  const { setToken } = useStore();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const [passwordConfirm, setPasswordConfirm] = useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8000/api/v1/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const resJson = await response.json();
    if (resJson.token) setToken(resJson.user, resJson.token);
    console.log(resJson);
  };

  return (
    <>
      <Button className='button-login' onClick={handleOpen}>
        Log In
      </Button>
      <Modal open={open} onClose={handleClose}>
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
          <Typography variant='h6'>Enter Email and Password</Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              className='textfield'
              id='email'
              label='Email Address'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

            <TextField
              className='textfield'
              id='password'
              label='Password'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            <Button type='submit'>Log In</Button>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default LoginButton;
