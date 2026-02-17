//src/app/project/page.tsx

'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getProjectList } from '@/api/project';
import { ProjectListResponse } from '@/types/project';
import ProjectPageTemplate from '@/components/templates/project/ProjectPagetemplate';

export default function ProjectsPage() {
    const router = useRouter();

    const [projectList, setProjectList] = useState<ProjectListResponse | null>(null);

    useEffect(() => {
        getProjectList().then(setProjectList).catch(console.error);
    }, []);

    if (!projectList) return <div>Loading...</div>;

    const handleProjectNavigation = (id: number) => {
        router.push(`/project/${id}`);
    };

    return (
        <ProjectPageTemplate 
            data={projectList} 
            onProjectClick={handleProjectNavigation}
        />
    );
}