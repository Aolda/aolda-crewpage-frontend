// /src/components/templates/main/Activity/Activity.tsx
'use client';

import React from 'react';
import MainSection from '../MainSection/MainSection';
import * as S from './Activity.styles';
import ActivityBlock from '@/components/organisms/ActivityBlock';
import { type ActivitySummary } from '@/types/project';

interface ActivityProps {
  activities: ActivitySummary[]; // 실제 서버 데이터 타입으로 정의 가능
}

const Activity = ({ activities }: ActivityProps) => {
    const duplicatedActivities = Array(10).fill(activities).flat();
    const mobileActivities = activities.slice(0, 6);

    return (
        <MainSection
            label="Activity"
            title={<>아올다에서 완성하는<br/><span>Full-Cycle 클라우드 여정</span></>}
            description={<>아올다는 아이디어를 발굴하여, 최신 클라우드 기술로 개발하고,<br />나아가 서비스를 직접 운영하며 발생하는 모든 문제를 해결하는<br />실전 경험을 통해 IT 전문가로 성장하는 가장 확실한 길을 제시합니다.</>}
        >
            <S.ActivityWrapper>
                {/* 상단 탭 메뉴 */}
                <S.TabContainer>
                    <S.Tab>
                        <h4>활동 원칙</h4>
                        <p>아올다는 모든 소학회 구성원들이 <span>학기 당 최소 1개 이상<br />활동에 참여하는 것을 원칙</span>으로 합니다.<br />
                        개발 프로젝트, 스터디 등 희망하는 활동에 참여하거나,<br />직접 기획하여 진행할 수 있습니다</p>
                    </S.Tab>
                    <S.Tab>
                        <h4>정기 활동</h4>
                        <p><span>아올다는 매월 2, 4주차 월요일 19시에 정기모임을 진행합니다.</span><br />운영과 관련된 다양한 문제를 논의하고,<br />각자 진행중인 프로젝트를 공유하며,<br />
                        자유로운 아이디어 제안을 통해 발전하는 시간을 가집니다.</p>
                    </S.Tab>
                </S.TabContainer>
                {/* 데스크탑/태블릿: 수평 무한 스크롤 */}
                <S.HorizontalScrollArea>
                    <S.CardList $count={activities.length}>
                        {duplicatedActivities.map((item, index) => (
                            <ActivityBlock
                                key={`${item.activityNames.en}-${index}`}
                                status={item.status}
                                date={item.startedAt}
                                title={item.activityNames.ko}
                                subtitle={item.activityNames.en}
                                description={item.description}
                            />
                        ))}
                    </S.CardList>
                </S.HorizontalScrollArea>

                {/* 모바일: 최대 6개 그리드 + 더보기 링크 */}
                <S.MobileActivityGrid>
                    {mobileActivities.map((item, index) => (
                        <ActivityBlock
                            key={`mobile-${item.activityNames.en}-${index}`}
                            status={item.status}
                            date={item.startedAt}
                            title={item.activityNames.ko}
                            subtitle={item.activityNames.en}
                            description={item.description}
                        />
                    ))}
                </S.MobileActivityGrid>
                <S.MoreLink href="/activity">활동 더보기</S.MoreLink>
            </S.ActivityWrapper>
        </MainSection>
    );
};

export default Activity;