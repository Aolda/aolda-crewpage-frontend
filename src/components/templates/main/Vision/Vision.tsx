'use client';

import React from 'react';
import MainSection from '../MainSection/MainSection';
import VisionCard from '@/components/molecules/VisionCard';
import * as S from './Vision.styles';

const VISION_DATA = [
    {
        id: 'idea',
        title: '아이디어',
        icon: '/main/vision-idea.png',
        description: "아주대학교 학생들이 원하는 프로젝트들을\n 자유롭게 기획 및 진행해 볼 수 있어요.",
    },
    {
        id: 'dev',
        title: '개발',
        icon: '/main/vision-dev.png',
        description: "기존 프로젝트들과 더불어 최신 기술 스택을\n 활용한 개발 경험을 폭넓게 지원하고 있어요.",
    },
    {
        id: 'ops',
        title: '운영',
        icon: '/main/vision-ops.png',
        description: "개발한 서비스를 배포된 환경에서\n 직접 관리하고, 안정적으로 유지할 수 있어요." ,
    },
];

const Vision = () => {
    return (
        <MainSection
            label="Vision"
            title={<>경험의 기회와 <strong>자유로운 도전의 장</strong>을<br />만들어내는 소학회</>}
            description={<>아올다는 클라우드 인프라에 관심있는 아주대학교 학생들이<br /> 함께 학습하고 프로젝트를 진행하며 성장하는 소학회입니다.</>}
        >
            <S.VisionWrapper>
                <S.GlareEffect />
                <S.CardGrid>
                    {VISION_DATA.map((item) => (
                        <VisionCard key={item.id} src={item.icon} title={item.title} description={item.description} />
                    ))}
                </S.CardGrid>
            </S.VisionWrapper>
        </MainSection>
    );
};

export default Vision;