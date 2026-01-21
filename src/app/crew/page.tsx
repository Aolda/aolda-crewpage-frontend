//src/app/crew/page.tsx
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { MOCK_CREW_LIST } from './mockData';
import CrewPageTemplate from '@/components/templates/crew/CrewPagetemplate';

export default function CrewListPage() {
    const router = useRouter();

    const handleDetailNavigation = (id: string) => {
        router.push(`/crew/${id}/activity`);
    };

    // 실제 데이터(Mock)를 템플릿에 속성(Prop)으로 넘겨줌
    return (
        <CrewPageTemplate 
            crewList={MOCK_CREW_LIST} 
            onDetailClick={handleDetailNavigation} 
        />
    );
}