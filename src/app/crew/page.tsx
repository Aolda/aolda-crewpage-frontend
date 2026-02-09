//src/app/crew/page.tsx
'use client';

import React, { useEffect,useState } from 'react';
import { CrewMember } from '@/types/crew';
import { useRouter } from 'next/navigation';
import { MOCK_CREW_LIST } from './mockData';
import CrewPageTemplate from '@/components/templates/crew/CrewPagetemplate';
import Pagination from '@/components/molecules/Pagination';

const ITEMS_PER_PAGE = 6;

export default function CrewListPage() {
    const [data, setData] = useState<any>(null); // 명세표 구조 수용용
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        const fetchCrews = async () => {
        // 페이지 번호를 쿼리 파라미터로 전달
        const res = await fetch(`/api/crews?page=${currentPage}`);
        const json = await res.json();
        setData(json);
        };
        fetchCrews();
    }, [currentPage]);

    // if (!data) return null;

    const router = useRouter();

    const handleDetailNavigation = (id: string) => {
        router.push(`/crew/${id}/activity`);
    };

    // 실제 데이터(Mock)를 템플릿에 속성(Prop)으로 넘겨줌
    return (
        <CrewPageTemplate crewList={MOCK_CREW_LIST} onDetailClick={handleDetailNavigation}>
            <Pagination 
                current={currentPage} 
                total={MOCK_CREW_LIST.length} 
                pageSize={ITEMS_PER_PAGE} 
                onPageChange={(page) => setCurrentPage(page)} 
            /> 
        </CrewPageTemplate>
    );
}