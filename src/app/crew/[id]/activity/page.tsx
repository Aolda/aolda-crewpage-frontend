'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { CrewDetailResponse } from '@/types/crew';
import CrewDetailPageTemplate from '@/components/templates/CrewDetail/CrewDetailPageTemplate';
import MenuItem from '@/components/molecules/MenuItem';
import { getCrewDetail } from '@/api/crew';

import { MOCK_CREW_DETAIL } from '@/mocks/crewData';

export default function CrewActivityPage() {
    // const { id } = useParams();
    // const [crew, setCrew] = useState<CrewDetailResponse | null>(null);
    // const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     const fetchCrewActivityData = async () => {
    //         try {
    //             setIsLoading(true);
    //             // 서버에서 크루 상세 정보를 직접 패칭 (활동 리스트 포함)
    //             const data = await getCrewDetail(id as string);
    //             setCrew(data);
    //         } catch (error) {
    //             console.error('데이터 로드 실패:', error);
    //         } finally {
    //             setIsLoading(false);
    //         }
    //     };

    //     if (id) fetchCrewActivityData();
    // }, [id]);

    // if (isLoading) return <div>로딩 중...</div>;
    // if (!crew) return <div>크루 정보를 찾을 수 없습니다.</div>;

    const [crew, setActivities] = useState(MOCK_CREW_DETAIL);

    return (
        <CrewDetailPageTemplate member={crew as any} activeTab="활동">
            {crew.activities.length > 0 ? (
                crew.activities.map((item) => (
                    <MenuItem
                        key={item.activityId}
                        id={item.activityId}
                        pageName="activity"
                        title={item.activityNames.en}
                        date={item.startedAt}
                        description={item.description}
                        status={item.status as any}
                    />
                ))
            ) : (
                <p>참여한 활동이 없습니다.</p>
            )}
        </CrewDetailPageTemplate>
    );
}