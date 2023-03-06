import React from 'react'
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail, HiOutlineLink } from "react-icons/hi";
import { GiPlainCircle } from "react-icons/gi";
import './CVPreview.css'

class CVPreview extends React.Component {
    constructor(props) {
        super(props)
        this.handleResize = this.handleResize.bind(this)
        this.containerRef = React.createRef();
        this.observer = null;
        this.state = {
            height: 989.8,
            scale: 1
        }
    }

    componentDidMount() {
        this.observer = new ResizeObserver(this.handleResize);
        this.observer.observe(this.containerRef.current);
    }

    componentWillUnmount() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }

    handleResize(entries) {
        const { width } = entries[0].contentRect;
        const aspectRatioHeight = width * 1.414
        const scale = width * 1 / 700
        this.setState({
            height: aspectRatioHeight,
            scale
        })
    }



    render() {
        const { firstName, lastName, charge, profile, email, website, location, phoneNumber, education, experience, skills } = this.props
        return (
            <section className='paperPreviewContainer' ref={this.containerRef} style={{ height: `${this.state.height}px`, minHeight: `${this.state.height}px` }}>
                <div className='paperPreview' style={{ transform: `scale(${this.state.scale})` }}>
                    <div className='titleOfPaper'>
                        <h1 className='aspirantNamePaper'>{firstName} {lastName}</h1>
                        <h2 className='chargeNamePaper'>{charge}</h2>
                    </div>

                    <div className='profilePaper seccionInfo'>
                        <h3 className='seccionTitle'>PROFILE</h3>
                        <div className='seccionContainer'>
                            <p className='profileDescription'>{profile}</p>
                        </div>

                    </div>

                    <div className='contactPaper seccionInfo'>
                        <h3 className='seccionTitle'>CONTACT</h3>
                        <div className='seccionContainer'>
                            <div className='contactElement'>
                                <HiOutlineLocationMarker />
                                <p>{location}</p>
                            </div>
                            <div className='contactElement'>
                                <HiOutlinePhone />
                                <p>{phoneNumber}</p>
                            </div>
                            <div className='contactElement'>
                                <HiOutlineMail />
                                <p>{email}</p>
                            </div>
                            <div className='contactElement'>
                                <HiOutlineLink />
                                <p>{website}</p>
                            </div>
                        </div>
                    </div>

                    <div className='experiencesPaper seccionInfo'>
                        <h3 className='seccionTitle'>WORK EXPERIENCE</h3>
                        <div className='seccionContainer'>
                            {
                                experience.map((exp) => {
                                    return (
                                        <div key={`${exp.id}-paper`} className='workExperience'>
                                            <div className='jobInfoTitleExperience'>
                                                <h4>{exp.charge}</h4>
                                                <h5>{exp.company} / {exp.location} / {exp.years} years</h5>
                                            </div>
                                            <p className='jobDescriptionExperience'>{exp.additions}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className='educationPaper seccionInfo'>
                        <h3 className='seccionTitle'>EDUCATION</h3>
                        <div className='seccionContainer'>
                            {
                                education.map((education) => {
                                    return (
                                        <div key={`${education.id}-paper`}>
                                            <h4>{education.degree}</h4>
                                            <p>{education.university}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>

                    <div className='skillsPaper seccionInfo'>
                        <h3 className='seccionTitle'>SKILLS</h3>
                        <div className='seccionContainer'>
                            {
                                skills.map((skills) => {
                                    return (
                                        <div key={`${skills.id}-paper`} className='skillListElement'>
                                            <GiPlainCircle />
                                            <div >{skills.skillDescription}</div>

                                        </div>
                                    )
                                })
                            }

                        </div>

                    </div>
                </div>
            </section>
        )
    }
}

export default CVPreview;