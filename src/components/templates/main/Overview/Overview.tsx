// /src/components/templates/main/Overview/Overview.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import MainSection from '../MainSection/MainSection';
import * as S from './Overview.styles';

const Overview = () => {
    return (
        <MainSection
            label="Overview"
            title={
                <>
                    <S.SinceText>since 2023</S.SinceText>
                    아주대 유일무이 <span>클라우드 개발/운영 소학회</span>
                </>
            }
            description={
                <>
                    아올다는 클라우드 인프라에 관심 있는 아주대학교 학생들이<br />
                    단순한 호기심에서 시작하여 현재까지<br />
                    함께 학습하고 프로젝트를 진행하며 성장하는 소학회입니다.
                </>
            }
        >
            <S.OverviewWrapper>
                {/* 그래픽 영역 */}
                <S.SphereContainer>
                    <S.BgText>
                        <Image src="/images/main/bgText.png" alt="bgtext" width={2128} height={120}/>
                    </S.BgText>

                    <S.GlareEffect />

                    <S.ShadowWrapper>
                        <svg viewBox="0 0 436 116" fill="none" xmlns="http://www.w3.org/2000/svg">

                            <defs>
                                <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" style={{"stopColor":"rgba(163, 210, 245, 1)"}} />
                                    <stop offset="100%" style={{"stopColor":"rgba(95, 122, 143, 1)"}} />
                                </linearGradient>
                                <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" style={{"stopColor":"rgba(72, 164, 234, 1)"}} />
                                    <stop offset="100%" style={{"stopColor":"rgba(41, 93, 132, 1)"}} />
                                </linearGradient>
                            </defs>
                            {/* 가장 넓고 연한 타원 (맨 아래) */}
                            <ellipse cx="218" cy="65" rx="210" ry="40" stroke="url(#gradient1)" strokeWidth="3"/>
                            {/* 중간 타원 */}
                            <ellipse cx="218" cy="60" rx="170" ry="25" stroke="url(#gradient2)" strokeWidth="5"/>
                            {/* 가장 좁고 진한 타원 (맨 위) */}
                            <ellipse cx="218" cy="60" rx="130" ry="14" fill="rgba(0, 0, 0, 0.58)"/>
                        </svg>
                    </S.ShadowWrapper>

                    <S.SphereImage>
                    {/* 실제 구체 이미지 경로로 수정 필요 */}
                        <Image 
                            src="/images/main/icon.png" 
                            alt="Cloud Sphere" 
                            width={384} 
                            height={384}
                        />
                    </S.SphereImage>
                </S.SphereContainer>

                {/* 연결부 */}
                <S.DashedLine />

                {/* 하단 카드 영역 */}
                <S.InfoCard>
                    <S.CardText>
                        <h3>아올다는<br className="pc-only" />목표를 향한<br className="mobile-only" />
                        <span>도전 속 새로운 배움</span>을 위해<br />나아가고 있습니다</h3>
                        <p>
                            <span>아올다</span>는 클라우드 개발과 운영 중 발생하는 문제들을 해결하고,<br />
                            불편한 기능과 환경을 새롭게 개발/개선하는 과정을 통해<br />
                            팀원 개개인의 목표를 향한 역량을 기르고 배움을 얻고자 노력합니다.
                        </p>
                    </S.CardText>
                    <S.CardIllustration>
                        {/* 실제 일러스트 이미지 경로로 수정 필요 */}
                        <Image 
                            src="/images/main/mainImg1.png" 
                            alt="Learning Illustration" 
                            width={320} 
                            height={240} 
                        />
                    </S.CardIllustration>
                </S.InfoCard>
            </S.OverviewWrapper>
        </MainSection>
    );
};

export default Overview;