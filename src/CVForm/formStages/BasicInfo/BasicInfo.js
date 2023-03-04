import React from 'react'
import './BasicInfo.css'

class BasicInfo extends React.Component {
    constructor(props) {
        super(props);
        this.handlingInput = this.handlingInput.bind(this)
    }

    handlingInput(e) {
        const input = e.target.id
        const value = e.target.value

        if (input === 'firstName') {
            this.props.getData(value, 'firstName')
        }
        if (input === 'lastName') {
            this.props.getData(value, 'lastName')
        }
        if (input === 'charge') {
            this.props.getData(value, 'charge')
        }
        if (input === 'profile') {
            this.props.getData(value, 'profile')
        }

    }

    render() {
        return (
            <div className='basicInfo'>
                <label className='firstName inputContainer'>
                    First Name
                    <input onChange={this.handlingInput} maxLength='9' type="text" name="" id="firstName" />
                </label>
                <label className='lastName inputContainer'>
                    Last Name
                    <input onChange={this.handlingInput} maxLength='9' type="text" name="" id="lastName" />
                </label >
                <label className='charge inputContainer'>
                    Charge
                    <input onChange={this.handlingInput} maxLength='40' type="text" name="" id="charge" />
                </label>
                <label className='profile inputContainer'>
                    Profile
                    <textarea onChange={this.handlingInput} maxLength='440' type="text" name="" id="profile" />
                </label>
                <h2 className='formTitleStage'>Basic info</h2>
            </div>

        )
    }
}


export default BasicInfo;
