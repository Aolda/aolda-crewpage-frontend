'use client';

import React, { useEffect, useState } from 'react';
import { CrewMember } from '@/types/crew';
import { Project } from '@/types/project';

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

    // 1. 상태 관리 (데이터 및 로딩 상태)
    const [crews, setCrews] = useState<CrewMember[]>([]);
    const [projects, setProjects] = useState<Project[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // 2. 데이터 페칭 로직
    useEffect(() => {
        const fetchMainData = async () => {
            try {
                setIsLoading(true);
                // 크루와 프로젝트 데이터를 병렬로 요청
                const [crewRes, projectRes] = await Promise.all([
                    fetch('/api/crews'),
                    fetch('/api/projects')
                ]);

                if (!crewRes.ok || !projectRes.ok) throw new Error('데이터 로드 실패');

                const crewData = await crewRes.json();
                const projectData = await projectRes.json();

                setCrews(crewData);
                setProjects(projectData);
            } catch (error) {
                console.error('Fetching error:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchMainData();
    }, []);

    // 상세 페이지 이동 함수
    const handleDetailNavigation = (id: string) => {
        // 기본 페이지를 activity로 설정: /crew/[id]/activity
        router.push(`/crew/${id}/activity`);
    };

    // 로딩 중일 때의 처리 (추후 스켈레톤 UI로 대체 권장)
    if (isLoading) {
        return <BaseTemplate><div>데이터를 불러오는 중입니다...</div></BaseTemplate>;
    }

    return (
        <BaseTemplate>
            {/* 1. 최상단 Hero 섹션 */}
            <HeroSection />

            <Overview />

            <Vision />

            <Activity activities={projects}/>

            <Crew crews={crews} onCrewClick={handleDetailNavigation}/>
        </BaseTemplate>
    );
}