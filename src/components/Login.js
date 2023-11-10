import React from 'react';
import '../styles/login.css';

function Logon() {

  return (
    <div className="section_big">
      <div className="modal_small">
        <div className="wrap_steps">
          <div className="step">
           <div className='step'>
          
            <div className="step-txt" style={{fontFamily:'sans-serif', fontSize:'32px', color:'#006400', fontWeight:'bold'}}>Login</div>
            </div>
            
            
            {/* <div className="step-txt">{isLogin ? 'Login' : 'Sign up'}</div> */}
          </div>
         
        </div>
        <div className="form-block w-form">
          <form
            id="email-form"
            name="email-form"
            data-name="Email Form"
            method="get"
           
            className="form"
            data-wf-page-id="64b5124a00cf93214c44e4cc"
            data-wf-element-id="993c1d66-8f66-7c4a-9c26-70891fa45198"
            aria-label="Email Form"
          >
            <div className="text-center">
             
              <p>Login to continue the chat with your career rep.</p>
            </div>
              <div className="field-wrapper top">
                <input
                  type="email"
                  className="field-input w-input"
                  maxLength="256"
                  name="Email-3"
                  data-name="Email 3"
                  placeholder="Enter your email"
                  id="Email-3"
                  data-ms-member="email"
                />
              </div>

            <div className="field-wrapper">
              <input
                type="password"
                className="field-input w-input"
                maxLength="256"
                name="Password-3"
                data-name="Password 3"
                placeholder="********"
                id="Password-3"
                data-ms-member="password"
              />
            </div>
            
            
            <input
              type="submit"
              value= 'Login'
              data-wait="Please wait..."
              className="button_form w-button"
            />

            <a href="/register" className='text-sm'>New here? Create account</a>
            
          </form>
        </div>
      </div>
    </div>
  );
}

export default Logon;
