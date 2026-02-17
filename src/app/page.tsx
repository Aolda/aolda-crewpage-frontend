'use client';

import React, { useEffect, useState } from 'react';
import { getAllActivities } from '@/api/activity';
import { getCrewList } from '@/api/crew';
import { ActivitySummary } from '@/types/project';
import { CrewMember } from '@/types/crew'

import Hero from '@/components/templates/main/Hero/Hero';
import Overview from '@/components/templates/main/Overview/Overview';
import Vision from '@/components/templates/main/Vision/Vision';
import Activity from '@/components/templates/main/Activity/Activity';
import Crew from '@/components/templates/main/Crew/Crew';
import { useRouter } from 'next/navigation';
import JoinSection from '@/components/molecules/JoinSection';

import { MOCK_CREW_LIST } from '../mocks/crewData';
import { MOCK_ACTIVITY_RESPONSE } from '@/mocks/activityData';


export default function HomePage() {
    const router = useRouter();

    // 1. 상태 관리 (데이터 및 로딩 상태)
    const [activities, setActivities] = useState<ActivitySummary[]>([]);
    const [crews, setCrews] = useState<CrewMember[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // 2. 데이터 페칭 로직
    useEffect(() => {
        const loadMainData = async () => {
            try {
                setIsLoading(true);
                // 크루와 프로젝트 데이터를 병렬로 요청
                // const [activityRes, crewRes] = await Promise.all([
                //     getAllActivities(),
                //     getCrewList()
                // ]);

                // setActivities(activityRes.data);
                // setCrews(crewRes.data);

                setCrews(MOCK_CREW_LIST);
                setActivities(MOCK_ACTIVITY_RESPONSE.data);
            } catch (error) {
                console.error('Fetching error:', error);
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

    // 로딩 중일 때의 처리 (추후 스켈레톤 UI로 대체 권장)
    if (isLoading) {
        return <><div>데이터를 불러오는 중입니다...</div></>;
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