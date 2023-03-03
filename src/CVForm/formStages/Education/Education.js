import React from 'react'
import './Education.css'
import uniqid from 'uniqid'
import { BsFillTrashFill } from "react-icons/bs";


class Education extends React.Component {

    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this)
        this.addEducation = this.addEducation.bind(this)
        this.resetValues = this.resetValues.bind(this)
        this.deleteEducation = this.deleteEducation.bind(this)
        this.degreeInput = React.createRef()
        this.universityInput = React.createRef()
        this.info = {
            degree: '',
            university: '',
            id: ''
        };
        this.state = {
            education: []
        };
    }

    deleteEducation(e) {
        const id = e.currentTarget.parentNode.id
        const education = [...this.state.education]
        const index = education.findIndex((info) => info.id === id)
        education.splice(index, 1)
        this.setState({
            education: education
        })
        e.preventDefault()
    }

    resetValues() {
        this.degreeInput.current.value = ''
        this.universityInput.current.value = ''
        this.info = {
            degree: '',
            university: '',
            id: ''
        };
    }

    handleInput(e) {
        const input = e.target.id
        const value = e.target.value

        if (input === 'degree') {
            this.info.degree = value
        }
        if (input === 'university') {
            this.info.university = value
        }
    }

    addEducation(e) {
        if (this.info.degree === '' || this.info.university === '') {
            alert('field the camps');
        } else {
            this.info.id = uniqid();
            const info = { ...this.info };
            const education = [...this.state.education];
            education.length < 4 ? education.push(info) : alert('no more than 4');
            this.setState({ education: education });
            this.resetValues();
        }

        e.preventDefault()
    }

    render() {
        return (
            <div className='education'>
                <label className='degree inputContainer'>
                    degree
                    <input type="text" ref={this.degreeInput} name="" id="degree" onChange={this.handleInput} />
                </label>
                <label className='university inputContainer'>
                    university
                    <input type="text" ref={this.universityInput} name="" id="university" onChange={this.handleInput} />
                </label >
                <div className='listOfEducation'>{
                    this.state.education.map((education) => {
                        return (
                            <div key={education.id} id={education.id} className='educationLabel'>
                                <div>
                                    <h3>{education.degree}</h3>
                                    <p>{education.university}</p>
                                </div>
                                <button className='deleteEducationBtn' onClick={this.deleteEducation}><BsFillTrashFill /></button>
                            </div>
                        )
                    })
                }</div>
                <button className='addBtn' onClick={this.addEducation}>+</button>
                <h2 className='formTitleStage'>Education</h2>
            </div>
        )
    }
}


export default Education;
