// /src/app/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ActivitySummary } from '@/types/project';
import { CrewMember } from '@/types/crew'
import { getAllActivities } from '@/api/activity';
import { getCrewList } from '@/api/crew';

import Hero from '@/components/templates/main/Hero/Hero';
import Overview from '@/components/templates/main/Overview/Overview';
import Vision from '@/components/templates/main/Vision/Vision';
import Activity from '@/components/templates/main/Activity/Activity';
import Crew from '@/components/templates/main/Crew/Crew';
import JoinSection from '@/components/molecules/JoinSection';
import LoadingScreen from '@/components/atoms/LoadingScreen';

export default function HomePage() {
    const router = useRouter();

    // 1. 상태 관리 (데이터 및 로딩 상태)
    const [activities, setActivities] = useState<ActivitySummary[]>([]);
    const [crews, setCrews] = useState<CrewMember[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    // 2. 데이터 페칭 로직
    useEffect(() => {
        const loadMainData = async () => {
            try {
                setIsLoading(true);
                setHasError(false);

                const [activityRes, crewRes] = await Promise.all([
                    getAllActivities(),
                    getCrewList(),
                ]);

                setActivities(activityRes.data);
                setCrews(crewRes.data);
            } catch (error) {
                setHasError(true);
                console.error('메인 페이지 데이터 로드 실패:', error);
            } finally {
                setIsLoading(false);
            }
        };

        loadMainData();
    }, []);

    // 상세 페이지 이동 함수
    const handleDetailNavigation = (id: number) => {
        // 기본 페이지를 activity로 설정: /crew/[id]/activity
        router.push(`/crew/${id}/activity`);
    };

    // 로딩 중일 때의 처리 (추후 스켈레톤 UI로 대체)
    if (isLoading) {
        return <LoadingScreen />;
    }

    // 에러 발생 시 아무것도 렌더링하지 않거나, 에러 전용 UI 표시
    if (hasError) {
        return null;
    }

    return (
        <>
            {/* 1. 최상단 Hero 섹션 */}
            <Hero />

            <Overview />

            <Vision />

            <Activity activities={activities}/>

            <Crew crews={crews} onCrewClick={handleDetailNavigation}/>

            <JoinSection />
        </>
    );
}
