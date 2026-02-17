'use client';

import React, { useState } from 'react';
import MainSection from '../MainSection/MainSection';
import * as S from './Activity.styles';
import ActivityBlock from '@/components/organisms/ActivityBlock';
import { type ActivitySummary } from '@/types/project';

interface ActivityProps {
  activities: ActivitySummary[]; // 실제 서버 데이터 타입으로 정의 가능
}

const Activity = ({ activities }: ActivityProps) => {
    const [activeTab, setActiveTab] = useState('principles');

    return (
        <MainSection
            label="Activity"
            title={<>아올다에서 완성하는<br/><strong>Full-Cycle 클라우드 여정</strong></>}
            description={<>아올다는 아이디어를 발굴하여, 최신 클라우드 기술로 개발하고,<br />나아가 서비스를 직접 운영하며 발생하는 모든 문제를 해결하는<br />실전 경험을 통해 IT 전문가로 성장하는 가장 확실한 길을 제시합니다.</>}
        >
            <S.ActivityWrapper>
                {/* 상단 탭 메뉴 */}
                <S.TabContainer>
                    <S.TabButton 
                        $isActive={activeTab === 'principles'} 
                        onClick={() => setActiveTab('principles')}
                    >
                        <h4>활동 원칙</h4>
                        <p>아올다는 모든 소학회 구성원들이 <span>학기 당 최소 1개 이상<br />활동에 참여하는 것을 원칙</span>으로 합니다.<br />
                        개발 프로젝트, 스터디 등 희망하는 활동에 참여하거나,<br />직접 기획하여 진행할 수 있습니다</p>
                    </S.TabButton>
                    <S.TabButton 
                        $isActive={activeTab === 'regular'} 
                        onClick={() => setActiveTab('regular')}
                    >
                        <h4>정기 활동</h4>
                        <p><span>아올다는 매월 2, 4주차 월요일 19시에 정기모임을 진행합니다.</span><br />운영과 관련된 다양한 문제를 논의하고,<br />각자 진행중인 프로젝트를 공유하며,<br />
                        자유로운 아이디어 제안을 통해 발전하는 시간을 가집니다.</p>
                    </S.TabButton>
                </S.TabContainer>
                {/* 하단 수평 스크롤 리스트 */}
                <S.HorizontalScrollArea>
                    <S.CardList>
                        {activities.map((item, index) => (
                            <ActivityBlock 
                                key={`${item.activityNames.en}-${index}`}
                                status={item.status} // ACTIVITY_STATUS/...
                                date={item.startedAt}
                                title={item.activityNames.ko}
                                subtitle={item.activityNames.en}
                                description={item.description} 
                            />
                        ))}
                    </S.CardList>
                </S.HorizontalScrollArea>
            </S.ActivityWrapper>
        </MainSection>
    );
};

export default Activity;