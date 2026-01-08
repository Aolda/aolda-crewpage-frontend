//src/app/projects/[id]/page.tsx
'use client';

import React, { use } from 'react';

interface PageProps {
    params: Promise<{ id: string }>;
}

export default function ProjectsPage({ params }: PageProps) {
    
    const resolvedParams = use(params);
    const id = resolvedParams.id;

    return (
        <div>
        <h1>[A-6] 프로젝트 - 활동</h1>
        
        <p>프로젝트 ID: <strong>{id}</strong>님의 프로젝트 기록입니다.</p>
        </div>
    );
}