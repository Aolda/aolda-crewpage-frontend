// /src/components/molecules/JoinSections.tsx
'use client';

import React from 'react';
import * as S from './JoinSection.styles';
import Image from 'next/image';

const JoinSection = () => {
    return (
        <S.Container>
            <h3>아올다의<br />새로운 크루가 되어주세요</h3>
            
            <S.ButtonGrid>
                <div className="btn-wrapper">
                    <span>아올다로<br className='not-mobile'/>꿈을 담아내고 싶다면?</span>
                    <S.PrimaryButton href="https://console.aoldacloud.com/auth/login?referer=/">
                        <Image src="/images/consoleIcon.png" alt="icon" width={18} height={18} />
                        콘솔로 이동
                    </S.PrimaryButton>
                </div>
                
                <div className="btn-wrapper">
                    <span>아올다를<br className='not-mobile'/>함께 만들어가고 싶다면?</span>
                    <S.OutlineButton href="#">
                        <Image src="/images/aoldaIcon.svg" alt="icon" width={18} height={18} />
                        팀 아올다 합류
                    </S.OutlineButton>
                </div>
            </S.ButtonGrid>
        </S.Container>
    );
};

export default JoinSection;