import React from 'react'
import BasicInfo from './formStages/BasicInfo/BasicInfo';
import Contact from './formStages/Contact/Contact';
import Education from './formStages/Education/Education';
import Experience from './formStages/Experience/Experience';
import Skills from './formStages/Skills/Skills';
import './CVForm.css'
import { FaGithubSquare, FaSun, FaMoon, FaEye, FaEyeSlash } from 'react-icons/fa';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { IoNewspaper } from 'react-icons/io5';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

class CVForm extends React.Component {

    constructor(props) {
        super(props);
        this.swiperRef = React.createRef();
        this.swipeToNextPrev = this.swipeToNextPrev.bind(this)
        this.state = {
            progress: 0
        }
    }


    swipeToNextPrev(e) {
        const swiper = this.swiperRef.current.swiper;
        e.currentTarget.id === 'prevFormBtn' ? swiper.slidePrev() : swiper.slideNext()
        this.setState({ progress: swiper.progress * 100 })
    }

    render() {
        const { getData } = this.props;

        return (
            <section className='CVFormSection'>

                <button className='prevNextBtn' id='prevFormBtn' onClick={this.swipeToNextPrev}><GrFormPrevious /></button>

                <div className='CVFormGrid'>
                    <h1 className='titleForm'>CV APPLICATION</h1>
                    <button className='githubBtn btnOptions'><FaGithubSquare /></button>
                    <button className='darkModeBtn btnOptions'><FaSun /></button>
                    <button className='onlyPreviewBtn btnOptions'><IoNewspaper /></button>
                    <button className='previewBtn btnOptions'><FaEye /></button>
                    <form className='CVForm'>
                        <Swiper
                            className='swiperPrincipal'
                            ref={this.swiperRef}
                            allowTouchMove={false}
                            spaceBetween={50}
                            slidesPerView={1}
                        >
                            <SwiperSlide className='swiper-slidePrincipal'> <BasicInfo getData={getData} /> </SwiperSlide>
                            <SwiperSlide className='swiper-slidePrincipal'> <Contact getData={getData} /> </SwiperSlide>
                            <SwiperSlide className='swiper-slidePrincipal'> <Education getData={getData} /> </SwiperSlide>
                            <SwiperSlide className='swiper-slidePrincipal'> <Experience getData={getData} /> </SwiperSlide>
                            <SwiperSlide className='swiper-slidePrincipal'> <Skills getData={getData} /> </SwiperSlide>
                        </Swiper>

                    </form>
                    <div className='progressBar' >
                        <div className='progressBarFill' style={{ width: `${this.state.progress}%` }}></div>
                    </div>
                </div>
                <button className='prevNextBtn' id='nextFormBtn' onClick={this.swipeToNextPrev}><GrFormNext /></button>
            </section>
        )
    }
}


export default CVForm;
