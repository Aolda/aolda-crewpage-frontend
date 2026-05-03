// /src/components/templates/main/MainSection/MainSection.tsx
'use client';

import React from 'react';
import * as S from './MainSection.styles';

interface MainSectionProps {
    label?: string;
    title: React.ReactNode; // strong 태그 등 마크업 포함을 위해 ReactNode 사용
    description?: React.ReactNode;
    children: React.ReactNode;
    bgColor?: string;
    hideHeaderOnMobile?: boolean;
}

const MainSection: React.FC<MainSectionProps> = ({
    label,
    title,
    description,
    children,
    bgColor,
    hideHeaderOnMobile,
}) => {
    return (
        <S.SectionWrapper $bgColor={bgColor}>
            <S.Header $hideOnMobile={hideHeaderOnMobile}>
                <S.GrayBar />
                {label && <S.Label>{label}</S.Label>}
                <S.Title>{title}</S.Title>
                {description && <S.Description>{description}</S.Description>}
            </S.Header>
            <S.Content>
                {children}
            </S.Content>
        </S.SectionWrapper>
    );
};

export default MainSection;
