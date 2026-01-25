'use client';

import BaseTemplate from '@/components/templates/BaseTemplate/BaseTemplate';
import HeroSection from '@/components/templates/main/HeroSection/HeroSection';
import Overview from '@/components/templates/main/Overview/Overview';
import Vision from '@/components/templates/main/Vision/Vision';
import Activity from '@/components/templates/main/Activity/Activity';
import { MOCK_PROJECTS } from './project/mockData';

export default function HomePage() {
    return (
        <BaseTemplate>
            {/* 1. 최상단 Hero 섹션 */}
            <HeroSection />

            <Overview />

            <Vision />

            <Activity activities={MOCK_PROJECTS}/>
        </BaseTemplate>
    );
}