import React from 'react'
import Video from '../../videos/earth.mp4'
import {Button} from '../ButtonElements'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper} from './HeroElements'
import { IoIosArrowForward } from "react-icons/io";


const HeroSection = () => {
  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </HeroBg>
        <HeroContent>
            <HeroH1>Selamat Datang di Sistem Informasi!</HeroH1>
            <HeroP>
            Sebuah sistem formal, sosioteknikal, dan organisasional yang dirancang untuk mengumpulkan, memproses, menyimpan, dan mendistribusikan informasi.
            </HeroP>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;