'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { isAxiosError } from 'axios';

import { useErrorHandler } from '@/hooks/useErrorHandler';
import { getCrewDetail } from '@/api/crew';
import { CrewDetailResponse } from '@/types/crew';

import CrewDetailPageTemplate from '@/components/templates/CrewDetail/CrewDetailPageTemplate';
import MenuItem from '@/components/molecules/MenuItem';
import LoadingScreen from '@/components/atoms/LoadingScreen';

const EMPTY_POST_MESSAGE = '작성된 포스트가 없습니다.';
const EMPTY_POST_STYLE = { color: '#9CA3AF', padding: '2rem 0' };

export default function CrewDetailPage() {
    const { id } = useParams();
    const { handleError } = useErrorHandler();

    const [crew, setCrew] = useState<CrewDetailResponse | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<'활동' | '블로깅'>('활동');

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);

                const data = await getCrewDetail(id as string);
                setCrew(data);
            } catch (error) {
                if (isAxiosError(error) && error.response?.data?.code) {
                    handleError(error.response.data.code);
                } else {
                    console.error('크루 상세 로드 실패:', error);
                }
            } finally {
                setIsLoading(false);
            }
        };

        if (id) fetchData();
    }, [id, handleError]);

    if (isLoading) {
        return <LoadingScreen />;
    }

    if (!crew) return null;

    return (
        <CrewDetailPageTemplate
            member={crew}
            activeTab={activeTab}
            onTabChange={setActiveTab}
        >
            {activeTab === '활동' ? (
                crew.activities.length > 0 ? (
                    crew.activities.map((item) => (
                        <MenuItem
                            key={item.activityId}
                            id={item.activityId}
                            pageName="activity"
                            title={item.activityNames.en}
                            date={item.startedAt}
                            description={item.description}
                            status={item.status}
                        />
                    ))
                ) : (
                    <p style={EMPTY_POST_STYLE}>{EMPTY_POST_MESSAGE}</p>
                )
            ) : (
                crew.bloggings.length > 0 ? (
                    crew.bloggings.map((item, index) => (
                        <MenuItem
                            key={`${item.title}-${index}`}
                            id={index}
                            pageName="블로깅"
                            title={item.title}
                            date={item.postedAt.split(' ')[0]}
                            description={item.contentPreview}
                        />
                    ))
                ) : (
                    <p style={EMPTY_POST_STYLE}>{EMPTY_POST_MESSAGE}</p>
                )
            )}
        </CrewDetailPageTemplate>
    );
}
