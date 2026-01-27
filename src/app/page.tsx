'use client';

import BaseTemplate from '@/components/templates/BaseTemplate/BaseTemplate';
import HeroSection from '@/components/templates/main/HeroSection/HeroSection';
import Overview from '@/components/templates/main/Overview/Overview';
import Vision from '@/components/templates/main/Vision/Vision';
import Activity from '@/components/templates/main/Activity/Activity';
import Crew from '@/components/templates/main/Crew/Crew';
import { useRouter } from 'next/navigation';
import { MOCK_PROJECTS } from './project/mockData';
import { MOCK_CREW_LIST } from './crew/mockData';

export default function HomePage() {
    const router = useRouter();
    // 상세 페이지 이동 함수
    const handleDetailNavigation = (id: string) => {
        // 기본 페이지를 activity로 설정: /crew/[id]/activity
        router.push(`/crew/${id}/activity`);
    };

    return (
        <BaseTemplate>
            {/* 1. 최상단 Hero 섹션 */}
            <HeroSection />

            <Overview />

            <Vision />

            <Activity activities={MOCK_PROJECTS}/>

            <Crew crews={MOCK_CREW_LIST} onCrewClick={handleDetailNavigation}/>
        </BaseTemplate>
    );
}