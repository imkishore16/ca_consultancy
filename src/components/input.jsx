import React from 'react'
import emailjs from '@emailjs/browser'
import TextField from '@mui/material/TextField';
import 'rsuite/dist/rsuite.min.css'; 
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Input } from 'rsuite';

const Inputs = () => {
  function sendEmail(e)
  {
    e.preventDefault();
    emailjs.sendForm('service_t67izrn',
    'template_ud7l03l',
    e.target,
    'xNwQn8UBjxDukCjle'
    ).then(res=>{
      console.log(res);
      alert("Your message has been sent!");
    }).catch(err=>console.log(err))

  }

  return (
    <>
    <form onSubmit={sendEmail}>
    <div>
        <TextField  style={{marginLeft:'20px',padding:'5px',paddingTop:'25px','&:hover':{ color: 'grey' }}} id="standard-basic" name='first_name' label="First Name" variant="standard" InputLabelProps={{color:'grey'}} InputProps={{color:'grey'}}/>
        <TextField style={{marginLeft:'20px',padding:'5px',paddingTop:'25px'}} id="standard-basic" label="Last Name" name='last_name' variant="standard" InputLabelProps={{color:'grey'}} InputProps={{color:'grey'}}/>
    </div>
    <div>
        <TextField style={{marginLeft:'20px',padding:'5px',paddingTop:'25px'}} id="standard-basic" label="Email" variant="standard" name='user_email' InputLabelProps={{color:'grey'}} InputProps={{color:'grey'}}/>
        <TextField style={{marginLeft:'20px',padding:'5px',paddingTop:'25px'}} id="standard-basic" label="Phone Number" variant="standard" name='mobile_number' InputLabelProps={{color:'grey'}} InputProps={{color:'grey'}}/>
    </div>

    <div className='radio-inp'>
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        style={{
            paddingTop:'10px'
        }}
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="General Enquiry" control={<Radio />} label="General Enquiry" />
        <FormControlLabel value="General Enquiry" control={<Radio />} label="General Enquiry" />
        <FormControlLabel value="General Enquiry" control={<Radio />} label="General Enquiry" />
        
      </RadioGroup>
    </FormControl>

    </div>

    <div style={{marginLeft:'10px',padding:'5px',paddingTop:'20px'}} className='mes-inp'>

    <Input as="textarea" rows={3} placeholder="Textarea" name='message' />
    </div>

    <div className='but-inp'>
    <button className='but' >Send Message</button>
    </div>
    </form>

    </>
  )
}

export default Inputs