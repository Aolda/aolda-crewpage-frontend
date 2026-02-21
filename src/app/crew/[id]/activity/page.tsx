// /src/app/crew/[id]/activity/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { isAxiosError } from "axios";

import { useErrorHandler } from "@/hooks/useErrorHandler";
import { getCrewDetail } from '@/api/crew';
import { CrewDetailResponse } from '@/types/crew';

import CrewDetailPageTemplate from '@/components/templates/CrewDetail/CrewDetailPageTemplate';
import MenuItem from '@/components/molecules/MenuItem';

export default function CrewActivityPage() {
    const { id } = useParams();
    const { handleError } = useErrorHandler();

    const [crew, setCrew] = useState<CrewDetailResponse | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const fetchCrewActivityData = async () => {
            try {
                setIsLoading(true);
                setHasError(false);
                // 서버에서 크루 상세 정보를 직접 패칭 (활동 리스트 포함)
                const data = await getCrewDetail(id as string);
                setCrew(data);
            } catch (error) {
                setHasError(true);
                // 명세에 따른 404(ERR_USER_NOT_FOUND) 또는 503 처리
                if (isAxiosError(error) && error.response?.data?.code) {
                    handleError(error.response.data.code);
                } else {
                    console.error('데이터 로드 실패:', error);
                }
            } finally {
                setIsLoading(false);
            }
        };

        if (id) fetchCrewActivityData();
    }, [id, handleError]);

    if (isLoading) return <div>로딩 중...</div>;
    if (hasError || !crew) return null;

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