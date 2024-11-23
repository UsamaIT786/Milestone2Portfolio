import React from 'react'

const Contact = () => {
  return (
    <div>

        <div className='contactform'>
            <h1>
                Get-In Touch</h1>



            <label htmlFor="Name">Name</label>
            <input type="Name" name="Name" id="Name"placeholder='Enter Your Name Here'required />
            <label htmlFor="Email">Email</label>
            <input type="Email" name="Email" id="Email"placeholder='Enter Your Email Here'required />
            <label htmlFor="Password">Password</label>
            <input type="Password" name="Password" id="Password"placeholder='Enter Your Password Here'required />
            <label htmlFor="Phone">Phone</label>
            <input type="Phone" name="Phone" id="Phone"placeholder='Enter Your Phone Number Here'required />

            

        </div>

        <div className='contactbtn'>
            <button>Sign-up</button>


        </div>
      
    </div>
  )
}

export default Contact
