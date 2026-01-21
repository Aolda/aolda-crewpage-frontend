//src/app/project/page.tsx

'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { MOCK_PROJECTS } from './mockData';
import ProjectPageTemplate from '@/components/templates/project/ProjectPagetemplate';

export default function ProjectsPage() {
    const router = useRouter();

    const handleProjectNavigation = (id: string) => {
        router.push(`/projects/${id}`);
    };

    return (
        <ProjectPageTemplate 
            projectList={MOCK_PROJECTS} 
            onProjectClick={handleProjectNavigation}
        />
    );
}