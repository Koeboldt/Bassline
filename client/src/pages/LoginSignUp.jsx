import React, { useState } from'react';
import './assets/css/LoginSignUp.css';

import user_icon from './assets/img/account-box-line.png';
import email_icon from './assets/img/at-line.png';
import password_icon from './assets/img/lock-password-line.png';

const LoginSignUp = () => {

    const [action,setAction] = useState('Sign Up');

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                {/* might have to put plain text "Login" into the underline div */}
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                {action==='Login'?<div></div>:<div className='input'>
                    <img src={user_icon} alt='user' />
                    <input type='text' placeholder='Name' />
                </div>}

                <div className='input'>
                    <img src={email_icon} alt='user' />
                    <input type='email' placeholder='Email' />
                </div>
                <div className='input'>
                    <img src={password_icon} alt='user' />
                    <input type='password' placeholder='Password' />
                </div>
                {action==='Sign Up'?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here!</span></div>}                
                <div className="submit-container">
                    <div className={action==='Login'?'submit gray':'submit'} onClick={()=>{setAction('Sign Up')}}>Sign Up</div>
                    <div className={action==='Sign Up'?'submit gray':'submit'} onClick={()=>{setAction('Login')}}>Login</div>
                </div>
            </div>
        </div>
    )
}

export default LoginSignUp;