import React from 'react'
import emailjs from '@emailjs/browser';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hll2sdc', 'template_u6f7qek', e.target, 't-_Ss4rFzkkDpx0Xg')
    .then(res=>{
      console.log("success", res)
    })
    .catch(err=> 
      console.log(err)
    );
  }

  return (
    <Box 
      component = "form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '400px' },
        marginBottom: '50px'
      }}
      noValidate
      autoComplete="off"
      onSubmit={sendEmail}
    >
      <Typography
        align='center'
        variant='h2'
        sx={{
          fontWeight: 'bold',
          marginBottom: '10px'
        }}
      >
        Contact Me! 
      </Typography>
      <div align="center">
        <TextField
          required
          id="outlined-required"
          label="name"
          defaultValue="John Doe"
        />
      </div>
      <div align="center">
        <TextField
          required
          id="outlined-required"
          label="email"
          defaultValue="johnson@gmail.com"
          type="email"
        />
        
      </div>
      <div align="center">
        <TextField
          required
          multiline
          fullWidth
          id="outlined-multiline-static"
          label="message"
          rows={6}
          defaultValue="Type your message here!"
        />
      </div>
      <div align="center">
        <Button type="submit" variant="contained" color="secondary" sx={{marginTop: '10px'}}>
          <Typography sx={{fontWeight: 'bold', color: "#F3DEBA"}}>
            Send
          </Typography>  
        </Button>    
      </div>

    </Box>
  )
}

export default contact