'use client';

import BaseTemplate from '@/components/templates/BaseTemplate/BaseTemplate';
import HeroSection from '@/components/templates/main/HeroSection/HeroSection';
import MainSection from '@/components/templates/main/MainSection/MainSection';

export default function HomePage() {
    return (
        <BaseTemplate>
            {/* 1. 최상단 Hero 섹션 */}
            <HeroSection />

            {/* 2. Overview 섹션 (템플릿 활용) */}
            <MainSection
                label="Overview"
                title={<>아주대 유일무이 <strong>클라우드 개발/운영 소학회</strong></>}
                description="아올다는 클라우드 인프라에 관심 있는 아주대학교 학생들이..."
                bgColor='white'
            >
                dd
            </MainSection>
        </BaseTemplate>
    );
}