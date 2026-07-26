// /src/components/templates/CrewDetail/CrewDetailTemplate.tsx
'use client';

import React from 'react';
import { CrewDetailResponse } from '@/types/crew';
import Profile from '@/components/molecules/Profile';
import * as S from './CrewDetailPageTemplate.styles';
import Image from 'next/image';

interface CrewDetailPageTemplateProps {
    member: CrewDetailResponse;
    activeTab: '활동' | '블로깅';
    onTabChange: (tab: '활동' | '블로깅') => void;
    children: React.ReactNode;
}

const CrewDetailPageTemplate = ({ member, activeTab, onTabChange, children }: CrewDetailPageTemplateProps) => {

    return (
        <>
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
                            onClick={() => onTabChange('활동')}
                        >
                            <Image
                                src={activeTab === '활동' 
                                    ? "/images/crew/CategoryImgBlue.png" 
                                    : "/images/crew/CategoryImg.png"}
                                alt="활동" width={24} height={24} />
                            활동
                        </S.TabButton>
                        <S.TabButton 
                            $isActive={activeTab === '블로깅'} 
                            onClick={() => onTabChange('블로깅')}
                        >
                            <Image
                                src={activeTab === '블로깅' 
                                    ? "/images/crew/BlogingImgBlue.png" 
                                    : "/images/crew/BlogingImg.png"}
                                alt="블로깅" width={24} height={24} />
                            블로깅
                        </S.TabButton>
                    </S.TabWrapper>

                    {/* 페이지별 데이터 리스트 (MenuItem들) */}
                    <S.ListWrapper>
                    {children}
                    </S.ListWrapper>
                </S.ContentSection>
            </S.TemplateWrapper>        
        </>
    );
};

export default CrewDetailPageTemplate;