import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
export default function Contact() {
    <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
    />
    function notify(type, text) {
        if (type === "error") {
            toast.error(text, {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else if (type === "success") {
            toast.success(text, {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }
    (function () {
        emailjs.init("0zKjZS5qbjQAhX5YV");
    })();
    const [detail, setDetail] = useState({ name: "", mail: "", mess: "" })
    const handleChange = e => {
        if (e.target.name === 'name') setDetail(({ ...detail, name: e.target.value }))
        else if (e.target.name === 'mail') setDetail(({ ...detail, mail: e.target.value }))
        else if (e.target.name === 'mess') setDetail(({ ...detail, mess: e.target.value }))
    }
    const sendMail = event => {
        event.preventDefault()
        if (detail.name === "") {
            console.log("no name")
            notify("error", "Enter Valid name")
            return

        }
        else if (detail.mail === "") {
            notify("error", "Enter valid e-mail")
            return
        }
        emailjs.send("service_uhwsnfd", "template_d2jgj5p", {
            from_name: detail.name,
            from_Id: detail.mail,
            message: detail.mess,
        });
        notify("success", "Message sent")
        setDetail({
            name: "",
            mail: "",
            mess:""
            
        })
    }
    return (
        <section id='contact'>
            <h5>How To</h5>
            <h2>Contact</h2>
            <div className='contact-container'>
                <form className='message'>

                    <input type='text'
                        className='mail'
                        placeholder='Type your Name'
                        value={detail.name}
                        onChange={handleChange}
                        name='name'
                    />
                    <input type='email'
                        className='mail'
                        placeholder='Type your E-mail address'
                        value={detail.mail}
                        onChange={handleChange}
                        name='mail'
                    />
                    <textarea
                        className='mess'
                        placeholder='Type your message'
                        value={detail.mess}
                        onChange={handleChange}
                        name='mess'
                    />
                    <button type='submit' className='subbut' onClick={sendMail}>Send Mail</button>
                    <ToastContainer />
                </form>
            </div>
        </section>
    )
}
