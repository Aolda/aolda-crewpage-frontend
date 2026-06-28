// src/components/templates/main/Hero/Hero.tsx
'use client';

import React from 'react';
import * as S from './Hero.styles';

const Hero = () => {
    return (
        <S.HeroWrapper>
            <S.HeroContent>
                <h1>편리하고 안정적인 환경을 만들기 위해<br/>다양하고 깊게 배워나갑니다</h1>
                <div className="team-name">
                    <span>Team</span>
                    <span className="font-paperlogy">AOLDA</span>
                </div>
            </S.HeroContent>
        </S.HeroWrapper>
    );
};

export default Hero;
