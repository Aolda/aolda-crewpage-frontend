//src/app/crew/[id]/blog/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { CrewMember } from '@/types/crew';
import CrewDetailPageTemplate from '@/components/templates/CrewDetail/CrewDetailPageTemplate';
import MenuItem from '@/components/molecules/MenuItem';

export default function CrewBlogPage() {
    const { id } = useParams();
    const [member, setMember] = useState<CrewMember | null>(null);
    const [blogs, setBlogs] = useState<any[]>([]); 
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchBlogData = async () => {
            try {
                setIsLoading(true);
                // 멤버 정보와 블로그 리스트를 병렬로 가져옴
                const [memberRes, blogRes] = await Promise.all([
                    fetch(`/api/crews/${id}`),
                    fetch(`/api/crews/${id}/blogs`), 
                ]);

                if (!memberRes.ok || !blogRes.ok) throw new Error('데이터 로드 실패');

                const memberData = await memberRes.json();
                const blogData = await blogRes.json();

                setMember(memberData);
                setBlogs(blogData);
            } catch (error) {
                console.error('Fetching error:', error);
            } finally {
                setIsLoading(false);
            }
        };

        if (id) fetchBlogData();
    }, [id]);

    if (isLoading || !member) return <div>로딩 중...</div>;

    return (
        <CrewDetailPageTemplate member={member} activeTab="블로깅">
            {blogs.length > 0 ? (
                blogs.map((item) => (
                    <MenuItem
                        key={item.id}
                        pageName="블로깅"
                        title={item.title}
                        date={item.date}
                        description={item.description}
                        // 블로그 포스트는 status 프롭을 생략합니다.
                    />
                ))
            ) : (
                <p style={{ color: '#9CA3AF', padding: '2rem 0' }}>작성된 블로그 포스트가 없습니다.</p>
            )}
        </CrewDetailPageTemplate>
    );
}