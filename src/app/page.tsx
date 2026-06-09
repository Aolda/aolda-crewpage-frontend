// /src/app/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ActivitySummary } from '@/types/project';
import { CrewMember } from '@/types/crew'

import Hero from '@/components/templates/main/Hero/Hero';
import Overview from '@/components/templates/main/Overview/Overview';
import Vision from '@/components/templates/main/Vision/Vision';
import Activity from '@/components/templates/main/Activity/Activity';
import Crew from '@/components/templates/main/Crew/Crew';
import JoinSection from '@/components/molecules/JoinSection';

export default function HomePage() {
    const router = useRouter();

    // 1. 상태 관리 (데이터 및 로딩 상태)
    const [activities, setActivities] = useState<ActivitySummary[]>([]);
    const [crews, setCrews] = useState<CrewMember[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    // 2. 데이터 페칭 로직
    useEffect(() => {
        const MOCK_ACTIVITIES: ActivitySummary[] = [
            {
                status: 'ACTIVITY_STATUS/COMPLETED',
                startedAt: '2024-03',
                activityNames: { ko: '클라우드 인프라 스터디', en: 'Cloud Infra Study' },
                background: { url: '', color: '#1A8EE5' },
                activityType: 'ACTIVITY_TYPE/STUDY',
                description: 'AWS, GCP 등 클라우드 인프라 기초부터 심화까지 함께 학습하는 스터디입니다.',
            },
            {
                status: 'ACTIVITY_STATUS/ONBOARDING',
                startedAt: '2024-09',
                activityNames: { ko: '아올다 홈페이지 개발', en: 'Aolda Homepage' },
                background: { url: '', color: '#3B5BDB' },
                activityType: 'ACTIVITY_TYPE/PROJECT',
                description: '아올다 소학회 홈페이지를 Next.js와 Styled Components로 개발하는 프로젝트입니다.',
            },
            {
                status: 'ACTIVITY_STATUS/RECRIUTING',
                startedAt: '2025-03',
                activityNames: { ko: 'DevOps 실전 스터디', en: 'DevOps Practice' },
                background: { url: '', color: '#0CA678' },
                activityType: 'ACTIVITY_TYPE/STUDY',
                description: 'CI/CD 파이프라인 구성, Kubernetes 운영 등 DevOps 핵심 역량을 기르는 스터디.',
            },
            {
                status: 'ACTIVITY_STATUS/COMPLETED',
                startedAt: '2023-09',
                activityNames: { ko: '파란 프로젝트', en: 'Paran Project' },
                background: { url: '', color: '#F76707' },
                activityType: 'ACTIVITY_TYPE/PROJECT',
                description: '아주대학교 학생들을 위한 강의 정보 공유 플랫폼 파란을 개발한 프로젝트입니다.',
            },
        ];

        const MOCK_CREWS: CrewMember[] = [
            {
                crewId: 1,
                profile: { url: '' },
                crewName: '김아올',
                crewLog: [{ generation: 5, type: 'CREW_ROLE/P', department: 'DEPARTMENT_TYPE/CLEVEL' }],
                isActive: true,
                joinedGen: 3,
                univDepartment: '소프트웨어학과',
                univJoinedYear: '21',
                totalActivities: 5,
                totalBloggings: 12,
            },
            {
                crewId: 2,
                profile: { url: '' },
                crewName: '이다라',
                crewLog: [{ generation: 5, type: 'CREW_ROLE/VP', department: 'DEPARTMENT_TYPE/DEV' }],
                isActive: true,
                joinedGen: 4,
                univDepartment: '사이버보안학과',
                univJoinedYear: '22',
                totalActivities: 4,
                totalBloggings: 8,
            },
            {
                crewId: 3,
                profile: { url: '' },
                crewName: '박인프라',
                crewLog: [{ generation: 5, type: 'CREW_ROLE/CREW', department: 'DEPARTMENT_TYPE/INFRA' }],
                isActive: true,
                joinedGen: 5,
                univDepartment: '전자공학과',
                univJoinedYear: '23',
                totalActivities: 2,
                totalBloggings: 3,
            },
            {
                crewId: 4,
                profile: { url: '' },
                crewName: '최클라우드',
                crewLog: [{ generation: 5, type: 'CREW_ROLE/EA', department: 'DEPARTMENT_TYPE/GA' }],
                isActive: true,
                joinedGen: 4,
                univDepartment: '미디어학과',
                univJoinedYear: '22',
                totalActivities: 3,
                totalBloggings: 6,
            },
            {
                crewId: 5,
                profile: { url: '' },
                crewName: '정데브옵스',
                crewLog: [{ generation: 5, type: 'CREW_ROLE/CREW', department: 'DEPARTMENT_TYPE/DEV' }],
                isActive: true,
                joinedGen: 5,
                univDepartment: '소프트웨어학과',
                univJoinedYear: '23',
                totalActivities: 1,
                totalBloggings: 2,
            },
        ];

        setActivities(MOCK_ACTIVITIES);
        setCrews(MOCK_CREWS);
        setIsLoading(false);
    }, []);

    // 상세 페이지 이동 함수
    const handleDetailNavigation = (id: number) => {
        // 기본 페이지를 activity로 설정: /crew/[id]/activity
        router.push(`/crew/${id}/activity`);
    };

    // 로딩 중일 때의 처리 (추후 스켈레톤 UI로 대체)
    if (isLoading) {
        return null;
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
