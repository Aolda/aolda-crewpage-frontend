//src/app/project/page.tsx

'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { isAxiosError } from "axios";

import { useErrorHandler } from "@/hooks/useErrorHandler";
import { getProjectList } from '@/api/project';
import { ProjectListResponse } from '@/types/project';

import ProjectPageTemplate from '@/components/templates/project/ProjectPagetemplate';
import LoadingScreen from '@/components/atoms/LoadingScreen';
import ActivityErrorState from '@/components/molecules/ActivityErrorState';

export default function ProjectsPage() {
    const router = useRouter();
    const { handleError } = useErrorHandler();

    const [projectList, setProjectList] = useState<ProjectListResponse | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setIsLoading(true);
                setHasError(false);
                
                // API 호출
                const data = await getProjectList();
                setProjectList(data);
            } catch (error) {
                setHasError(true);
                // 명세된 에러 코드(400, 404, 503)에 따른 처리
                if (isAxiosError(error) && error.response?.data?.code) {
                    handleError(error.response.data.code);
                } else {
                    console.error('프로젝트 목록 로드 실패:', error);
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchProjects();
    }, [handleError]);

    if (isLoading) {
        return <LoadingScreen />;
    };

    // 에러 발생 시 UI 처리
    if (hasError || !projectList) {
        return (
            <ActivityErrorState
                message="주요 활동 데이터를 불러올 수 없습니다. 잠시 후 다시 시도해 주세요."
                onRetry={() => window.location.reload()}
            />
        );
    }

    const handleProjectNavigation = (id: string) => {
        router.push(`/activity/${id}`);
    };

    return (
        <ProjectPageTemplate 
            data={projectList} 
            onProjectClick={handleProjectNavigation}
        />
    );
}
