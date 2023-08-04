import React from "react";
// import {
//     MDBInput,
//     MDBCheckbox,
//     MDBBtn
//   } from 'mdb-react-ui-kit';
import emailjs from "emailjs-com";


function Contact(){
    function sendEmail(e){
        e.preventDefault()
        emailjs.sendForm('service_lxx6k4q',
        'template_1lqhf6m',
        e.target,
        'mqjzdEJhr4bW5zkD_').then(res=>{
            console.log(res);
        }).catch(err=>{
            console.log(err)
        })
    }
  
    return (
        <div className="contact">
            <h1 className="cname">
                Contact form
            </h1>
            <form className="cform" onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="name"/>

                <label>Email</label>
                <input type="email" name="user_email"/>

                <label>Message</label>
                <textarea name="message" rows="4"/>
                <input type="submit" value="send"/>
            </form>
        </div>
      );
  
}



export default Contact;