'use client';

import React from 'react';
import { useRouter, useParams } from 'next/navigation';
import { CrewMember } from '@/types/crew';
import Profile from '@/components/molecules/Profile';
import BaseTemplate from '../BaseTemplate/BaseTemplate';
import * as S from './CrewDetailPageTemplate.styles';
import Image from 'next/image';

interface CrewDetailPageTemplateProps {
    member: CrewMember;
    activeTab: '활동' | '블로깅';
    children: React.ReactNode; // MenuItem 리스트가 들어올 자리
}

const CrewDetailPageTemplate = ({ member, activeTab, children }: CrewDetailPageTemplateProps) => {
    const router = useRouter();
    const { id } = useParams();

    // 탭 클릭 시 해당 페이지로 경로 이동
    const handleTabClick = (tab: '활동' | '블로깅') => {
        const path = tab === '활동' ? 'activity' : 'blog';
        router.push(`/crew/${id}/${path}`);
    };

    return (
        <BaseTemplate>
            <S.TemplateWrapper>
                {/* 좌측: 고정 프로필 영역 */}
                <S.SidebarSection>
                    <Profile member={member} />
                </S.SidebarSection>

                {/* 우측: 컨텐츠 영역 */}
                <S.ContentSection>
                    {/* 상단 탭 메뉴 */}
                    <S.TabWrapper>
                        <S.TabButton 
                            $isActive={activeTab === '활동'} 
                            onClick={() => handleTabClick('활동')}
                        >
                            <Image src="/images/crew/CategoryImg.png" alt="활동" width={20} height={20} />
                            활동
                        </S.TabButton>
                        <S.TabButton 
                            $isActive={activeTab === '블로깅'} 
                            onClick={() => handleTabClick('블로깅')}
                        >
                            <Image src="/images/crew/BlogingImg.png" alt="블로깅" width={20} height={20} />
                            블로깅
                        </S.TabButton>
                    </S.TabWrapper>

                    {/* 페이지별 데이터 리스트 (MenuItem들) */}
                    <S.ListWrapper>
                    {children}
                    </S.ListWrapper>
                </S.ContentSection>
            </S.TemplateWrapper>        
        </BaseTemplate>
    );
};

export default CrewDetailPageTemplate;