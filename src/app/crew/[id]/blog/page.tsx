//src/app/crew/[id]/blog/page.tsx
'use client';

import React, { use } from 'react';

interface PageProps {
    params: Promise<{ id: string }>;
}

export default function CrewBlogPage({ params }: PageProps) {
    
    const resolvedParams = use(params);
    const id = resolvedParams.id;

    return (
        <div>
        <h1>[A-3] 크루북 - 블로그</h1>
        
        <p>크루 ID: <strong>{id}</strong>님의 블로그 기록입니다.</p>
        </div>
    );
}