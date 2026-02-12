//src/app/crew/[id]/blog/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { CrewDetailResponse } from '@/types/crew';
import CrewDetailPageTemplate from '@/components/templates/CrewDetail/CrewDetailPageTemplate';
import MenuItem from '@/components/molecules/MenuItem';
import { getCrewDetail } from '@/api/crew';

export default function CrewBlogPage() {
    const { id } = useParams();
    const [crew, setCrew] = useState<CrewDetailResponse | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCrewBlogData = async () => {
            try {
                setIsLoading(true);
                // 서버에서 블로깅 리스트가 포함된 전체 상세 데이터 수신
                const data = await getCrewDetail(id as string);
                setCrew(data);
            } catch (error) {
                console.error('블로깅 데이터 로드 실패:', error);
            } finally {
                setIsLoading(false);
            }
        };

        if (id) fetchCrewBlogData();
    }, [id]);

    if (isLoading) return <div>로딩 중...</div>;
    if (!crew) return <div>크루 정보를 찾을 수 없습니다.</div>;

    return (
        <CrewDetailPageTemplate member={crew} activeTab="블로깅">
            {crew.bloggings.length > 0 ? (
                crew.bloggings.map((item, index) => (
                    <MenuItem
                        key={`${item.title}-${index}`}
                        pageName="블로깅"
                        title={item.title}
                        date={item.postedAt.split(' ')[0]}
                        description={item.contentPreview}
                        // 블로그 포스트는 status 프롭을 생략합니다.
                    />
                ))
            ) : (
                <p style={{ color: '#9CA3AF', padding: '2rem 0' }}>작성된 블로그 포스트가 없습니다.</p>
            )}
        </CrewDetailPageTemplate>
    );
}