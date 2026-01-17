'use client';

import BaseTemplate from '@/components/templates/BaseTemplate/BaseTemplate';
import HeroSection from '@/components/templates/main/HeroSection/HeroSection';
import Overview from '@/components/templates/main/Overview/Overview';
import Vision from '@/components/templates/main/Vision/Vision';

export default function HomePage() {
    return (
        <BaseTemplate>
            {/* 1. 최상단 Hero 섹션 */}
            <HeroSection />

            <Overview />

            <Vision />
        </BaseTemplate>
    );
}