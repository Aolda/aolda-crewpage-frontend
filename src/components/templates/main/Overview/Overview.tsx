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
                    <div style={{ fontSize: '0.875rem', color: '#9CA3AF', marginBottom: '0.5rem' }}>since 2023</div>
                    아주대 유일무이 <strong>클라우드 개발/운영 소학회</strong>
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
                        <Image src="/main/bgText.png" alt="bgtext" width={2128} height={120}/>
                    </S.BgText>
                    <S.GlareEffect />
                    <S.SphereImage>
                    {/* 실제 구체 이미지 경로로 수정 필요 */}
                        <Image 
                            src="/icon.png" 
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
                        <h3>아올다는<br />목표를 향한 <strong>도전 속 새로운 배움</strong>을 위해<br />나아가고 있습니다</h3>
                        <p>
                            아올다는 클라우드 개발과 운영 중 발생하는 문제들을 해결하고,<br />
                            불편한 기능과 환경을 새롭게 개발/개선하는 과정을 통해<br />
                            팀원 개개인의 목표를 향한 역량을 기르고 배움을 얻고자 노력합니다.
                        </p>
                    </S.CardText>
                    <S.CardIllustration>
                        {/* 실제 일러스트 이미지 경로로 수정 필요 */}
                        <Image 
                            src="/main/mainImg1.png" 
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