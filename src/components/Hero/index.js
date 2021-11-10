import React from 'react';
import Navbar from '../Navbar';
import {HeroContainer, HeroBtn, HeroContent, HeroH1, HeroItems,HeroP} from './HeroElements';

const Hero = () => {
    return (
        <HeroContainer>
            <Navbar/>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Reservations</HeroH1>
                    <HeroP>
                        We accept a limited number of reservations up to
                        two weeks in advance for parties of up ten guests.
                    </HeroP>
                    <HeroBtn>Find A Table</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero;
