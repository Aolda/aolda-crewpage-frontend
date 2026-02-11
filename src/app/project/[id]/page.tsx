//src/app/project/[id]/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import ProjectDetailPageTemplate from '@/components/templates/ProjectDetail/ProjectDetailPageTemplate';
import { Project } from '@/types/project';
import { useParams } from 'next/navigation';

export default function ProjectPage() {
    
    const params = useParams();
    const id = params.id; // URL의 [id] 값

    const [project, setProject] = useState<Project | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProjectDetail = async () => {
            try {
                setIsLoading(true);
                // MSW 핸들러에 정의한 엔드포인트 호출
                const res = await fetch(`/api/projects/${id}`);
                
                if (!res.ok) throw new Error('데이터 로드 실패');
                
                const data = await res.json();
                setProject(data);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        if (id) fetchProjectDetail();
    }, [id]);

    if (isLoading) return <div>프로젝트 정보를 불러오는 중...</div>;
    if (!project) return <div>프로젝트를 찾을 수 없습니다.</div>;

    // 템플릿에 동적으로 가져온 데이터 주입
    return <ProjectDetailPageTemplate project={project} />;
}