// /src/app/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useErrorHandler } from "@/hooks/useErrorHandler";
import { isAxiosError } from "axios";
import { useRouter } from 'next/navigation';

import { getAllActivities } from '@/api/activity';
import { getCrewList } from '@/api/crew';
import { ActivitySummary } from '@/types/project';
import { CrewMember } from '@/types/crew'

import Hero from '@/components/templates/main/Hero/Hero';
import Overview from '@/components/templates/main/Overview/Overview';
import Vision from '@/components/templates/main/Vision/Vision';
import Activity from '@/components/templates/main/Activity/Activity';
import Crew from '@/components/templates/main/Crew/Crew';
import JoinSection from '@/components/molecules/JoinSection';
import FadeInUp from '@/components/atoms/FadeInUp';

export default function HomePage() {
    const router = useRouter();
    const { handleError } = useErrorHandler();

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

                //크루와 프로젝트 데이터를 병렬로 요청
                const [activityRes, crewRes] = await Promise.all([
                    getAllActivities(),
                    getCrewList()
                ]);

                setActivities(activityRes.data);
                setCrews(crewRes.data);

            } catch (error) {
                setHasError(true);
                if (isAxiosError(error) && error.response?.data?.code) {
                    handleError(error.response.data.code);
                } else {
                    console.error('메인 데이터 로드 실패:', error);
                }
            } finally {
                setIsLoading(false);
            }
        };

        loadMainData();
    }, [handleError]);

    // 상세 페이지 이동 함수
    const handleDetailNavigation = (id: number) => {
        // 기본 페이지를 activity로 설정: /crew/[id]/activity
        router.push(`/crew/${id}/activity`);
    };

    // 로딩 중일 때의 처리 (추후 스켈레톤 UI로 대체)
    if (isLoading) {
        return (
            <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                데이터를 불러오는 중입니다...
            </div>
        )
    }

    // 에러 발생 시 아무것도 렌더링하지 않거나, 에러 전용 UI 표시
    if (hasError) {
        return (
            <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h2>데이터 로드에 실패했습니다.</h2>
                <button onClick={() => window.location.reload()}>다시 시도</button>
            </div>
        );
    }

    return (
        <>
            {/* 1. 최상단 Hero 섹션: 진입 시 바로 보이므로 애니메이션 제외 */}
            <Hero />

            <FadeInUp><Overview /></FadeInUp>

            <FadeInUp delay={0.05}><Vision /></FadeInUp>

            <FadeInUp delay={0.05}><Activity activities={activities}/></FadeInUp>

            <FadeInUp delay={0.05}><Crew crews={crews} onCrewClick={handleDetailNavigation}/></FadeInUp>

            <FadeInUp delay={0.05}><JoinSection /></FadeInUp>
        </>
    );
}