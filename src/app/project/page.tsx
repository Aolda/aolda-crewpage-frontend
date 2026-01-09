//src/app/project/page.tsx
'use client';
import React from 'react';
import Badge from '@/components/atoms/Badge';

export default function ProjectListPage() {
    return (
        <div>
        <h1>[A-6] 프로젝트 상세</h1>
        <p>여기에서 프로젝트의 상세 정보를 볼 수 있습니다.</p>
        <div style={{ display: 'flex', gap: '10px', backgroundColor: "gray", width: "fit-content" }}>
            <Badge variant="transparent" status="PLANNING">기획중</Badge>
            <Badge variant="transparent" status="ONGOING">진행중</Badge>
            <Badge variant="transparent" status="DONE">완료</Badge>
        </div>
        <div style={{ display: 'flex', gap: '10px', backgroundColor: "red", width: "fit-content" }}>
            <Badge variant="transparent" status="PLANNING">기획중</Badge>
            <Badge variant="transparent" status="ONGOING">진행중</Badge>
            <Badge variant="transparent" status="DONE">완료</Badge>
        </div>
        <div style={{ display: 'flex', gap: '10px', backgroundColor: "blue", width: "fit-content" }}>
            <Badge variant="transparent" status="PLANNING">기획중</Badge>
            <Badge variant="transparent" status="ONGOING">진행중</Badge>
            <Badge variant="transparent" status="DONE">완료</Badge>
        </div>
        </div>
    );
}