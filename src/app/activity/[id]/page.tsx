//src/app/project/[id]/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { isAxiosError } from "axios"; // 추가

import { useErrorHandler } from "@/hooks/useErrorHandler";
import { getProjectDetail } from '@/api/project';

import { ProjectDetailResponse } from '@/types/project';
import ProjectDetailPageTemplate from '@/components/templates/ProjectDetail/ProjectDetailPageTemplate';
import { MOCK_PROJECT_DETAIL } from '@/mocks/projectData';
import LoadingScreen from '@/components/atoms/LoadingScreen';

const USE_MOCK = false;

export default function ProjectPage() {
    const params = useParams();
    const activityId = Number(params.id);
    const { handleError } = useErrorHandler();

    const [project, setProject] = useState<ProjectDetailResponse | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                setIsLoading(true);
                setHasError(false);

                if (USE_MOCK) {
                    setProject(MOCK_PROJECT_DETAIL);
                    return;
                }

                // API 호출
                const response = await getProjectDetail(activityId);
                setProject(response);

            } catch (err: unknown) {
                setHasError(true);
                // 명세에 정의된 403, 404, 503 에러 코드를 핸들러로 전달합니다
                if (isAxiosError(err) && err.response?.data?.code) {
                    handleError(String(err.response.data.code));
                } else {
                    console.error('Project Detail Fetch Error:', err);
                }
            } finally {
                setIsLoading(false);
            }
        };

        if (activityId) fetchProject();
    }, [activityId, handleError]);

    if (isLoading) {
        return <LoadingScreen />;
    };
    if (hasError || !project) return null;
    

    return <ProjectDetailPageTemplate project={project} />;
}
