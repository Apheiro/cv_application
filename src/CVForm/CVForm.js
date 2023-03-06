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
import { Keyboard } from "swiper";


import { motion } from 'framer-motion'
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
        const { getData, showPreviewFn, showPreview, showOnlyPreviewFn, width, dayTheme, dayThemeFn, refCVPreview } = this.props;
        return (
            <motion.section className='CVFormSection'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >

                {width > 1370 ? <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className='prevNextBtn'
                    id='prevFormBtn'
                    onClick={this.swipeToNextPrev}>
                    <GrFormPrevious />
                </motion.button> : null}

                <div className='CVFormGrid'>
                    <h1 className='titleForm'>CV APPLICATION</h1>
                    <motion.a
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className='githubBtn btnOptions'
                        href="https://github.com/Apheiro">
                        <FaGithubSquare />
                    </motion.a>

                    <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className='darkModeBtn btnOptions'
                        onClick={dayThemeFn}>
                        {dayTheme ? <FaMoon /> : <FaSun />}
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className='onlyPreviewBtn btnOptions'
                        onClick={showOnlyPreviewFn}>

                        <IoNewspaper />
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className={`previewBtn btnOptions ${width < 1000 ? 'disable' : ''}`}
                        onClick={showPreviewFn}>
                        {showPreview ? <FaEyeSlash /> : <FaEye />}
                    </motion.button>

                    <form className='CVForm'>
                        <Swiper
                            modules={[Keyboard]}

                            keyboard={{
                                enabled: true,
                            }}
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
                            <SwiperSlide className='swiper-slidePrincipal'> <Skills refCVPreview={refCVPreview} getData={getData} /> </SwiperSlide>
                        </Swiper>

                    </form>
                    <div className='progressBar' >
                        <div className='progressBarFill' style={{ width: `${this.state.progress}%` }}></div>
                    </div>
                </div>
                {
                    width > 1370 ? <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className='prevNextBtn'
                        id='nextFormBtn'
                        onClick={this.swipeToNextPrev}>
                        <GrFormNext />
                    </motion.button> :
                        <div className='prevNextBtnContainer'>
                            <motion.button
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                className='prevNextBtn'
                                id='prevFormBtn'
                                onClick={this.swipeToNextPrev}>
                                <GrFormPrevious />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                className='prevNextBtn'
                                id='nextFormBtn'
                                onClick={this.swipeToNextPrev}>
                                <GrFormNext />
                            </motion.button>
                        </div>
                }

            </motion.section >
        )
    }
}


export default CVForm;
