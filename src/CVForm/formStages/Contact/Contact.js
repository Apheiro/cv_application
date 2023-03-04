import React from 'react'
import './Contact.css'

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.handlingInput = this.handlingInput.bind(this)
    }

    handlingInput(e) {
        const input = e.target.id
        const value = e.target.value

        if (input === 'email') {
            this.props.getData(value, 'email')
        }
        if (input === 'website') {
            this.props.getData(value, 'website')
        }
        if (input === 'location') {
            this.props.getData(value, 'location')
        }
        if (input === 'phoneNumber') {
            this.props.getData(value, 'phoneNumber')
        }

    }

    render() {
        return (
            <div className='contact'>
                <label className='email inputContainer'>
                    Email
                    <input onChange={this.handlingInput} type="email" name="" id="email" />
                </label>
                <label className='website inputContainer'>
                    Website
                    <input onChange={this.handlingInput} type="url" name="" id="website" />
                </label >
                <label className='location inputContainer'>
                    Location
                    <input onChange={this.handlingInput} type="text" name="" id="location" />
                </label>
                <label className='phoneNumber inputContainer'>
                    Phone number
                    <input onChange={this.handlingInput} type="number" name="" id="phoneNumber" />
                </label>
                <h2 className='formTitleStage'>Contact</h2>
            </div>
        )
    }
}


export default Contact;
