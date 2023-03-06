import React from 'react'
import uniqid from 'uniqid'
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsFillTrashFill } from "react-icons/bs";

import 'swiper/css';
import 'swiper/css/pagination';

import './Experience.css'
import { EffectFade } from 'swiper';
import 'swiper/css/effect-fade';
class Experience extends React.Component {
    constructor(props) {
        super(props);
        this.swiperRef = React.createRef()
        this.deleteExperience = this.deleteExperience.bind(this)
        this.handleInput = this.handleInput.bind(this)
        this.createNewExperience = this.createNewExperience.bind(this)
        this.swipeToNextPrev = this.swipeToNextPrev.bind(this)
        this.chargeInput = React.createRef()
        this.companyInput = React.createRef()
        this.LocationInput = React.createRef()
        this.yearsInput = React.createRef()
        this.AdditionsInput = React.createRef()
        this.state = {
            swiperEnd: true,
            activeIndexSlide: 0,
            actualSlideId: '',
            slides: [],
            experiences: [
                {
                    charge: '',
                    company: '',
                    location: '',
                    years: 0,
                    additions: '',
                    id: uniqid()
                }
            ]
        }
    }

    componentDidMount() {
        const slideId = this.state.experiences[0].id
        this.setState({ actualSlideId: slideId })
    }

    handleInput(e) {
        const input = e.target.id
        const value = e.target.value
        const experiences = [...this.state.experiences]
        const slideId = this.state.actualSlideId
        const index = experiences.findIndex((exp) => exp.id === slideId)
        if (input === 'chargeExperience') { experiences[index].charge = value }
        if (input === 'company') { experiences[index].company = value }
        if (input === 'location') { experiences[index].location = value }
        if (input === 'years') { experiences[index].years = value }
        if (input === 'additions') { experiences[index].additions = value }
        this.setState({ experiences }, () => this.props.getData(this.state.experiences, 'experience'))
    }

    deleteExperience(e) {
        const experiences = [...this.state.experiences]
        const swiper = this.swiperRef.current.swiper;
        const index = experiences.findIndex((exp) => exp.id === this.state.actualSlideId)
        if (experiences.length !== 1) {
            experiences.splice(index, 1)
            this.setState({
                experiences: experiences
            }, () => {
                this.setState({
                    swiperEnd: this.swiperRef.current.swiper.isEnd,
                    actualSlideId: swiper.slides[swiper.activeIndex].getAttribute('id'),
                    activeIndexSlide: swiper.activeIndex
                })
                this.props.getData(this.state.experiences, 'experience')
            })
        }
        e.preventDefault()
    }

    createNewExperience(e) {
        const experiences = [...this.state.experiences]
        const swiper = this.swiperRef.current.swiper;
        if (experiences.length < 4) {
            experiences.push({
                charge: '',
                company: '',
                location: '',
                years: 0,
                id: uniqid()
            })
            this.setState({
                experiences,
                btnEnabled: true
            }, () => {
                swiper.slideNext()
                this.setState({
                    swiperEnd: this.swiperRef.current.swiper.isEnd,
                    activeIndexSlide: swiper.activeIndex,
                    actualSlideId: swiper.slides[swiper.activeIndex].getAttribute('id')
                })
            })
        } else {
            alert('no')
        }
        e.preventDefault()
    }

    swipeToNextPrev(e) {
        const swiper = this.swiperRef.current.swiper;
        e.currentTarget.id === 'prevExp' ? swiper.slidePrev() : swiper.slideNext()
        this.setState({
            swiperEnd: this.swiperRef.current.swiper.isEnd,
            actualSlideId: swiper.slides[swiper.activeIndex].getAttribute('id'),
            activeIndexSlide: swiper.activeIndex,
        })
        e.preventDefault()
    }

    render() {
        return (
            <div className='experiences'>
                <Swiper
                    modules={[EffectFade]}
                    effect={"fade"}

                    creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: ["-20%", 0, -1],
                        },
                        next: {
                            translate: ["100%", 0, 0],
                        },
                    }}

                    className='swiperExperiences'
                    ref={this.swiperRef}
                    allowTouchMove={false}
                    spaceBetween={50}
                    slidesPerView={1}
                >
                    {
                        this.state.experiences.map((experience) => {
                            return (
                                <SwiperSlide key={experience.id} id={experience.id} className='swiper-slideExperiences'>
                                    <label className='chargeExperience inputContainer'>
                                        Charge
                                        <input type="text" ref={this.chargeInput} maxLength='40' name="" id="chargeExperience" onChange={this.handleInput} />
                                    </label>
                                    <label className='company inputContainer'>
                                        Company
                                        <input type="text" ref={this.companyInput} maxLength='20' name="" id="company" onChange={this.handleInput} />
                                    </label >
                                    <label className='location inputContainer'>
                                        Location
                                        <input type="text" ref={this.LocationInput} maxLength='45' name="" id="location" onChange={this.handleInput} />
                                    </label>
                                    <label className='years inputContainer'>
                                        Years in the charge
                                        <input type="number" ref={this.yearsInput} max='99' name="" id="years" onChange={this.handleInput} />
                                    </label >
                                    <label className='additions inputContainer'>
                                        Additions
                                        <textarea type="text" ref={this.AdditionsInput} maxLength='275' name="" id="additions" onChange={this.handleInput} />
                                    </label>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                <button className='prevBtnExperience' id='prevExp' onClick={(e) => this.swipeToNextPrev(e)}>Previous</button>
                <div className='pagination'>
                    {
                        this.state.experiences.map((experiences, index) => {
                            return (
                                <span key={uniqid()} className={`swiper-pagination-bullet ${this.state.activeIndexSlide === index ? 'swiper-pagination-bullet-active' : null}`}></span>
                            )
                        })
                    }
                </div>
                <div className='nextDelNewBtns'>
                    <button className={`deleteExperienceBtn ${this.state.experiences.length === 1 ? 'disable' : ''}`} id='prevExp' onClick={this.deleteExperience}><BsFillTrashFill /></button>
                    {this.state.swiperEnd ?
                        <button className={`nextBtnExperience ${this.state.experiences.length < 4 ? '' : 'disable'}`} onClick={this.createNewExperience}>+ New</button>
                        :
                        <button className='nextBtnExperience' id='nextExp' onClick={(e) => this.swipeToNextPrev(e)}>Next</button>
                    }
                </div>
                <h2 className='formTitleStageExperience'>Experience</h2>

            </div>

        )
    }
}


export default Experience;