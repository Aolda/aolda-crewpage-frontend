//src/app/crew/page.tsx
'use client';
import React from 'react';
import { MOCK_CREW_LIST } from './mockData';
import { POSITION_LABEL } from '@/types/crew';
import Badge from '@/components/atoms/Badge';

export default function CrewListPage() {
    const sortedCrew = [...MOCK_CREW_LIST].sort((a, b) => a.position - b.position);


    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {sortedCrew.map(member => (
                <div key={member.id} style={{ borderBottom: '1px solid #eee', padding: '10px' }}>
                    <strong>{member.name}</strong> 
                    <span style={{ marginLeft: '10px', color: '#666' }}>
                        [{POSITION_LABEL[member.position]}]
                    </span>
                </div>
            ))}
            {/* 활동 여부 (배경 있음) */}
            <Badge status="ACTIVE">활동중</Badge>
            <Badge status="INACTIVE">비활동</Badge>

            {/* 학번/기수 (배경 없음) */}
            <Badge variant="outline">0기</Badge>
            <Badge variant="outline">소프트웨어 22학번</Badge>
        </div>
    );
}