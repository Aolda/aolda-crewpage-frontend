'use client';

import React from 'react';
import JoinSection from '@/components/molecules/JoinSection';
import LinkSection from '@/components/molecules/LinkSection';
import Image from 'next/image';
import * as S from './LinkPageTemplate.styles';

const LinkPageTemplate = () => {
    const LinkList = [
        {
            src: "/images/link/LinkImg1.png",
            title: "블로그",
            description: "아올다 내 아주대학교 학생들이 단순히 소학회 내 스터디 내용을 정리하는 곳이 아니라, 학생들이 AWS, GCP, Kubernetes, CI/CD 등 복잡한 클라우드 인프라를 직접 구축하고 운영하며 얻은 생생한 지식과 시행착오를 공유하는 공간입니다.",
            to: "#",
        },
        {
            src: "/images/link/LinkImg2.png",
            title: "클라우드",
            description: "아올다는 이론과 실습의 간극을 메우기 위해 실제 클라우드 환경을 \n구축하고 운영하고 있습니다. 이 페이지는 우리 소학회원들이 자유롭게 서비스를 배포하고 테스트하며 클라우드 실무 역량을 키워나가는 \n'개발 PlayGround'를 소개합니다.",
            to: "#",
        },
    ]
    return (
        <>
            <S.PageWrapper>
                <S.Ellipse className="ellipse1" />
                <S.Ellipse className="ellipse2" />
                <S.Ellipse className="ellipse3" />
                <S.Ellipse className="ellipse4" />
                <S.Ellipse className="ellipse5" />
                <S.Ellipse className="ellipse6" />
                <S.PageHeader>
                    <h2><strong>아올다</strong>의 다른<br />활동들도 만나보세요</h2>
                </S.PageHeader>

                <S.LinkWrapper>
                    {LinkList.map((link, index) => (
                        <LinkSection
                            key={index}
                            src={link.src}
                            index={index}
                            title={link.title}
                            description={link.description}
                            to={link.to}
                        />
                    ))}
                </S.LinkWrapper>

                <S.UnderSection>
                    <Image src="/images/link/UnderImg.png" alt="underimg" width={1053} height={510}/>
                    <h2><strong>아올다</strong>의 새로운<br />활동들을 함께 만들어 가봐요</h2>
                </S.UnderSection>

                {/* 공통 CTA 섹션 */}
                <JoinSection />
            </S.PageWrapper>
        </>
    );
};

export default LinkPageTemplate