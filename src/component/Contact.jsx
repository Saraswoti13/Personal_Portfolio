/* eslint-disable no-unused-vars */
import { Check, Mail, Send, User } from 'lucide-react';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import '../css/Contact.css';
import photo from '../assets/contact.webp';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setSubmitted(true);
        const formData = new FormData(event.target);
        formData.append("access_key", "32d754d2-d0a1-476d-a1f6-00a805156eae");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: "Success",
                text: "Message sent successfully",
                icon: "success"
            });
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className='contact-container'>
                <div className='contact-box'>
                    {!submitted ? (
                        <>
                            <div className='contact-header'>
                            <h2 className='contact-title'>
                                Let&apos;s <span className='highlight'>Connect</span>
                            </h2>
                                <img src={photo} alt="contact" />
                            
                            </div>
                            <form onSubmit={onSubmit} className='contact-form'>
                                <div className='input-group'>
                                    <User className='icon' />
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder='Your Name'
                                        required
                                    />
                                </div>

                                <div className='input-group'>
                                    <Mail className='icon' />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder='Your Email'
                                        required
                                    />
                                </div>

                                <div className='textarea-group'>
                                    <textarea
                                        name="message"
                                        onChange={handleChange}
                                        value={formData.message}
                                        required
                                        placeholder='Your Message'
                                        rows="4"
                                    ></textarea>
                                </div>

                                <div className='button-wrapper'>
                                    <button type='submit' className='send-button'>
                                        <Send className='button-icon' /> Send Message
                                    </button>
                                </div>
                            </form>
                        </>
                    ) : (
                        <div className="confirmation">
                            <Check className='success-icon' />
                            <h2 className='success-title'>Message Sent!</h2>
                            <p className='success-text'>We&apos;ll get back to you soon.</p>
                            <button onClick={() => setSubmitted(false)} className='send-again'>
                                Send Another response
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Contact;
