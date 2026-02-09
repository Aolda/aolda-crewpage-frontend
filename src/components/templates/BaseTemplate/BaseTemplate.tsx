'use client';

import React from 'react';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';
import * as S from './BaseTemplate.styles';

interface BaseTemplateProps {
    children: React.ReactNode;
}

const BaseTemplate: React.FC<BaseTemplateProps> = ({ children }) => {
    return (
        <S.Wrapper>
            <Header />
                <S.MainContent>{children}</S.MainContent>
            <Footer />
        </S.Wrapper>
    );
};

export default BaseTemplate;