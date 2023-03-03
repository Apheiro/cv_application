import React from 'react'
import './BasicInfo.css'

class BasicInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='basicInfo'>
                <label className='firstName inputContainer'>
                    First Name
                    <input type="text" name="" id="" />
                </label>
                <label className='lastName inputContainer'>
                    Last Name
                    <input type="text" name="" id="" />
                </label >
                <label className='charge inputContainer'>
                    Charge
                    <input type="text" name="" id="" />
                </label>
                <label className='profile inputContainer'>
                    Profile
                    <textarea type="text" name="" id="" />
                </label>
                <h2 className='formTitleStage'>Basic info</h2>
            </div>

        )
    }
}


export default BasicInfo;
