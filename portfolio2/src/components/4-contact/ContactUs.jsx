import React from 'react';
import {  } from "./ContactUs.css";
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import doneAnimation from "../../../src/animation/Animation - 1703425763304.json" 
import emailAnimation from "../../../src/animation/email.json"

export default function ContactUs(){
  const [state, handleSubmit] = useForm("myyrgonv");
 
  return (
    <section className='contact-us'>
      <h1 className='title'>
        <span className='icon-email'></span>
        Contact Us
      </h1>
      <p className='sub-title'>
        Contact Us for more information and get notified when I publish something new
      </p>
      <div className="flex">
        <form className='' onSubmit={handleSubmit}>
        <div className='flex'>
        <label htmlFor="email">Email Adresse:</label>
        <input autoComplete='off' name='email' type="email"id="email" placeholder=' Your Email' required />
        <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
        </div>

       <div className='flex' style={{marginTop :"26px"}}>
       <label htmlFor="message">Your Message</label>
        <textarea name='message' placeholder='You Message' id="message" required></textarea>
        <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
       </div>

        <button className='submit' type="submit"  disabled={state.submitting} >
          {state.submitting ?"submitting ..." :"submit"}
        </button>
        <br />
        <br />
        {state.succeeded && (<p className="flex"> 
        <Lottie loop={false} style={{height:"50px"}} animationData={doneAnimation} />
        Thanks for sending this message !
        
        </p> 
        )}
          </form>
          <div className="animation">
            <Lottie className='contact-animation'  style={{height:"500px"}} animationData={emailAnimation} />
          </div>
      </div>
    </section>
  )
}
