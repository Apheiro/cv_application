import React from 'react'
import './Contact.css'

class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='contact'>
                <label className='email inputContainer'>
                    Email
                    <input type="email" name="" id="" />
                </label>
                <label className='website inputContainer'>
                    Website
                    <input type="url" name="" id="" />
                </label >
                <label className='location inputContainer'>
                    Location
                    <input type="text" name="" id="" />
                </label>
                <label className='phoneNumber inputContainer'>
                    Phone number
                    <input type="number" name="" id="" />
                </label>
                <h2 className='formTitleStage'>Contact</h2>
            </div>
        )
    }
}


export default Contact;
