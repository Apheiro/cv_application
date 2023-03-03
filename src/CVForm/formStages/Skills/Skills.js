import './Skills.css'
import React from 'react'
import uniqid from 'uniqid'
import { BsFillTrashFill } from "react-icons/bs";

class Skills extends React.Component {

    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this)
        this.addSkill = this.addSkill.bind(this)
        this.deleteSkill = this.deleteSkill.bind(this)
        this.resetValues = this.resetValues.bind(this)
        this.skillInput = React.createRef()
        this.skill = {
            skillDescription: '',
            id: ''
        };
        this.state = {
            skills: []
        };
    }

    deleteSkill(e) {
        const id = e.currentTarget.parentNode.id
        const skills = [...this.state.skills]
        const index = skills.findIndex((skill) => skill.id === id)

        skills.splice(index, 1)
        this.setState({
            skills: skills
        })
        e.preventDefault()
    }

    resetValues() {
        this.skillInput.current.value = ''
        this.skill = {
            skillDescription: '',
            id: ''
        };
    }

    handleInput(e) {
        const value = e.target.value
        this.skill.skillDescription = value
    }

    addSkill(e) {
        if (this.skillInput.current.value === '') {
            alert('field the camp');
        } else {
            this.skill.id = uniqid();
            const skill = { ...this.skill };
            const skills = [...this.state.skills];
            skills.length < 10 ? skills.push(skill) : alert('no more than 4');
            this.setState({ skills: skills });
            this.resetValues();
        }
        e.preventDefault()
    }

    render() {
        return (
            <div className='skills'>
                <label className='skill inputContainer'>
                    Skill
                    <input type="text" ref={this.skillInput} name="" id="skill" onChange={this.handleInput} />
                </label>
                <div className='listOfSkills'>{
                    this.state.skills.map((skill) => {
                        return (
                            <div key={skill.id} id={skill.id} className='skillLabel'>
                                <h3>{skill.skillDescription}</h3>
                                <button className='deleteSkillBtn' onClick={this.deleteSkill}><BsFillTrashFill /></button>
                            </div>
                        )
                    })
                }</div>
                <button className='addSkillBtn' onClick={this.addSkill}>+</button>

                <button className='saveBtn' onClick={this.addSkill}>Save CV</button>
                <h2 className='formTitleStage'>Skills</h2>
            </div>
        )
    }
}


export default Skills;
