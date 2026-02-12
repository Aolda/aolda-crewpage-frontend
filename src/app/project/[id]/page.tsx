//src/app/project/[id]/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import ProjectDetailPageTemplate from '@/components/templates/ProjectDetail/ProjectDetailPageTemplate';
import { ProjectDetailResponse } from '@/types/project';
import { useParams } from 'next/navigation';
import { getProjectDetail } from '@/api/project';

export default function ProjectPage() {
    const { id } = useParams();
    const [project, setProject] = useState<ProjectDetailResponse | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                // 서버에서 데이터 직접 수신
                const data = await getProjectDetail(id as string);
                setProject(data);
            } catch (err: any) {
                // 명세에 정의된 에러 코드 처리 (403, 404, 503 등)
                setError(err.response?.data?.code || 'FETCH_ERROR');
            }
        };

        if (id) fetchProject();
    }, [id]);

    if (error) return <div>에러 발생: {error}</div>; //
    if (!project) return <div>로딩 중...</div>;

    return <ProjectDetailPageTemplate project={project} />;
}