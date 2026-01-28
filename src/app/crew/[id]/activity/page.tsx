'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { CrewMember } from '@/types/crew';
import { Project } from '@/types/project';
import CrewDetailPageTemplate from '@/components/templates/CrewDetail/CrewDetailPageTemplate';
import MenuItem from '@/components/molecules/MenuItem';

export default function CrewActivityPage() {
    const { id } = useParams();
    const [member, setMember] = useState<CrewMember | null>(null);
    const [activities, setActivities] = useState<Project[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchActivityData = async () => {
            try {
                setIsLoading(true);
                // MSW 핸들러를 통해 멤버 정보와 활동 리스트 페칭
                const [memberRes, activityRes] = await Promise.all([
                    fetch(`/api/crews/${id}`),
                    fetch('/api/projects') 
                ]);

                if (!memberRes.ok) throw new Error('데이터 로드 실패');

                const memberData = await memberRes.json();
                const activityData = await activityRes.json();

                setMember(memberData);
                setActivities(activityData);
            } catch (error) {
                console.error('Fetching error:', error);
            } finally {
                setIsLoading(false);
            }
        };

        if (id) fetchActivityData();
    }, [id]);

    if (isLoading || !member) return <div>로딩 중...</div>;

    return (
        <CrewDetailPageTemplate member={member} activeTab="활동">
            {activities.length > 0 ? (
                activities.map((item) => (
                    <MenuItem
                        key={item.id}
                        pageName="활동"
                        title={item.title}
                        date={item.date}
                        description={item.description}
                        status={item.status}
                    />
                ))
            ) : (
                <p>참여한 활동이 없습니다.</p>
            )}
        </CrewDetailPageTemplate>
    );
}