//src/app/project/[id]/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import ProjectDetailPageTemplate from '@/components/templates/ProjectDetail/ProjectDetailPageTemplate';
import { ProjectDetailResponse } from '@/types/project';
import { useParams } from 'next/navigation';
import { getProjectDetail } from '@/api/project';

import { MOCK_PROJECT_DETAILS } from '@/mocks/projectData';

const USE_MOCK = true;

export default function ProjectPage() {
    const params = useParams();
    const activityId = Number(params.id);
    const [project, setProject] = useState<ProjectDetailResponse | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                // 서버에서 데이터 직접 수신
                // const data = await getProjectDetail(id as string);
                // setProject(data);
                if (USE_MOCK) {
                    setProject(MOCK_PROJECT_DETAILS[3] as any);
                } else {
                    const response = await getProjectDetail(activityId);
                    // 알맹이 데이터(.data) 추출
                    setProject(response as any); 
                }
            } catch (err: any) {
                // 명세에 정의된 에러 코드 처리 (403, 404, 503 등)
                setError(err.response?.data?.code || 'FETCH_ERROR');
            }
        };

        if (activityId) fetchProject();
    }, [activityId]);

    if (error) return <div>에러 발생: {error}</div>; //
    if (!project) return <div>로딩 중...</div>;

    return <ProjectDetailPageTemplate project={project} />;
}