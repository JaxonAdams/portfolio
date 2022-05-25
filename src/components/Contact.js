import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const validEmail = validateEmail(e.target.value);

            if (!validEmail) {
                setErrorMessage('Your email is invalid.');
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage('');
                }
            }
        }

        if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
        } else {
            setErrorMessage('');
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState);
        // Add submit functionality here
    }

    return (
        <div id='contact'>
            <h1 className='lg-heading'>Contact <span className='secondary-text'>Me</span></h1>
            <h2 className='sm-heading'>Contact Info and Resume</h2>
            <div className='contact-info'>
                <div className='info-box'>
                    <p className='contact-type'>Phone: 801.310.2653</p>
                </div>
                <div className='info-box'>
                    <p className='contact-type'>Email: jadamsresume1@gmail.com</p>
                </div>
                <div className='info-box'>
                    <p className='contact-type'>Address: 3732 N Oak Blv, Eagle Mountain, UT</p>
                </div>
            </div>
            <form className='contact-form' onSubmit={handleSubmit}>
                <div className='form-title-container'>
                    <h3 className='form-title'>Send A Message</h3>
                </div>
                <input className={`form-input`} type='text' name='name' placeholder='Your Name' defaultValue={name} onBlur={handleChange} />
                <input className={`form-input`} type='email' name='email' placeholder='Your Email' defaultValue={email} onBlur={handleChange} />
                <textarea className='form-input message' rows='5' name='message' placeholder='Your Message' defaultValue={message} onBlur={handleChange} />
                {errorMessage && (
                    <div>
                        <p className='error-text'>{errorMessage}</p>
                    </div>
                )}
                <button className='form-input submit' type='submit'>Submit</button>
            </form>
            <div className='resume-footer'>
                <a className='resume-link' target='_blank' rel='noreferrer' href='https://docs.google.com/document/d/1WEmMjOFzbu4_urYaIPQbD8tOJPgo6y2qq4g0rxTNZwM/edit?usp=sharing'>View My Resume</a>
            </div>
        </div>
    );
}

export default Contact;