//src/app/crew/[id]/activity/page.tsx
'use client';

import React, { use } from 'react';
import Badge from '@/components/atoms/Badge';

interface PageProps {
    params: Promise<{ id: string }>;
}

export default function CrewActivityPage({ params }: PageProps) {
    
    const resolvedParams = use(params);
    const id = resolvedParams.id;

    return (
        <div>
        <h1>[A-4] 크루북 - 활동</h1>
        
        <p>크루 ID: <strong>{id}</strong>님의 활동 기록입니다.</p>
        <Badge variant="solid" status="ONGOING">진행중</Badge>
        <Badge variant="solid" status="DONE">완료</Badge>
        <Badge variant="solid" status="PLANNING">기획중</Badge>
        </div>
    );
}