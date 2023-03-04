import React from 'react'
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail, HiOutlineLink } from "react-icons/hi";
import './CVPreview.css'

class CVPreview extends React.Component {


    render() {
        return (
            <section className='paperPreview'>
                <div className='titleOfPaper'>
                    <h1 className='aspirantNamePaper'>CHRISTINE CROWDER</h1>
                    <h2 className='chargeNamePaper'>JUNIOR DEVELOPER</h2>
                </div>

                <div className='profilePaper seccionInfo'>
                    <h3 className='seccionTitle'>PROFILE</h3>
                    <div className='seccionContainer'>
                        <p className='profileDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>

                </div>

                <div className='contactPaper seccionInfo'>
                    <h3 className='seccionTitle'>CONTACT</h3>
                    <div className='seccionContainer'>
                        <div className='contactElement'>
                            <HiOutlineLocationMarker />
                            <p>Street Name City, Zip</p>
                        </div>
                        <div className='contactElement'>
                            <HiOutlinePhone />
                            <p>+54 387 6384609</p>
                        </div>
                        <div className='contactElement'>
                            <HiOutlineMail />
                            <p>emailAdress@mail.com</p>
                        </div>
                        <div className='contactElement'>
                            <HiOutlineLink />
                            <p>pepitoloco.com</p>
                        </div>

                    </div>

                </div>

                <div className='experiencesPaper seccionInfo'>
                    <h3 className='seccionTitle'>WORK EXPERIENCE</h3>
                    <div className='seccionContainer'>
                        <div className='workExperience'>
                            <div className='jobInfoTitleExperience'>
                                <h4>Normal Job Title</h4>
                                <h5>Company / Location / 2 years</h5>
                            </div>
                            <p className='jobDescriptionExperience'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in.</p>
                        </div>
                        <div className='workExperience'>
                            <div className='jobInfoTitleExperience'>
                                <h4>Normal Job Title</h4>
                                <h5>Company / Location / 2 years</h5>
                            </div>
                            <p className='jobDescriptionExperience'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in.</p>
                        </div>
                        <div className='workExperience'>
                            <div className='jobInfoTitleExperience'>
                                <h4>Normal Job Title</h4>
                                <h5>Company / Location / 2 years</h5>
                            </div>
                            <p className='jobDescriptionExperience'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in.</p>
                        </div>
                        <div className='workExperience'>
                            <div className='jobInfoTitleExperience'>
                                <h4>Normal Job Title</h4>
                                <h5>Company / Location / 2 years</h5>
                            </div>
                            <p className='jobDescriptionExperience'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in.</p>
                        </div>
                    </div>
                </div>

                <div className='educationPaper seccionInfo'>
                    <h3 className='seccionTitle'>EDUCATION</h3>
                    <div className='seccionContainer'>
                        <div className=''>
                            <h4>Software Enginner</h4>
                            <p>University of Brighton/London</p>
                        </div>
                        <div>
                            <h4>Software Enginner</h4>
                            <p>University of Brighton/London</p>
                        </div>
                        <div>
                            <h4>Software Enginner</h4>
                            <p>University of Brighton/London</p>
                        </div>
                        <div>
                            <h4>Software Enginner</h4>
                            <p>University of Brighton/London</p>
                        </div>
                    </div>

                </div>

                <div className='skillsPaper seccionInfo'>
                    <h3 className='seccionTitle'>SKILLS</h3>
                    <ul className='seccionContainer'>
                        <li>Pro player of valorant.</li>
                        <li>Pro player of valorant.</li>
                        <li>Pro player of valorant.</li>
                        <li>Pro player of valorant.</li>
                        <li>Pro player of valorant.</li>
                        <li>Pro player of valorant.</li>
                        <li>Pro player of valorant.</li>
                        <li>Pro player of valorant.</li>
                        <li>Pro player of valorant.</li>
                    </ul>

                </div>
            </section>
        )
    }
}

export default CVPreview;
