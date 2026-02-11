'use client';

import React from 'react';
import * as S from './ProjectDetailPageTemplate.styles';
import BreadCrumb from '@/components/molecules/BreadCrump';
import SolutionCard from '@/components/molecules/SolutionCard';
import CrewBlock from '@/components/organisms/CrewBlock'; // 추가
import { CrewMember } from '@/types/crew';
import { Project } from '@/types/project';

interface ProjectDetailPageTemplateProps {
    project: Project;
}

const ProjectDetailPageTemplate = ({ project }: ProjectDetailPageTemplateProps) => {
    // 예시 데이터 (실제로는 API나 Props로 받게 됩니다)
    const participatingCrews: CrewMember[] = [ /* ... 크루 데이터 배열 ... */ ];
    // Breadcrumb 데이터
    const breadcrumbItems = [
        { label: '홈', href: '/' },
        { label: '주요 활동', href: '/project' },
        { label: project.title, href: '#'},
    ];

    return (
        <>
            <S.HeaderBackground $bgColor={project.bgColor} $bgImg={project.thumbnail}/>
            <S.PageWrapper>
                {/* 1. 상단 내비게이션 */}
                <BreadCrumb items={breadcrumbItems} />

                {/* 2. 헤더 섹션 */}
                <S.HeaderSection>
                    <h1>{project.title}</h1>
                    <p>{project.subtitle}</p>
                </S.HeaderSection>

                {/* 3. 기획 정보 섹션 */}
                <S.Section>
                    <S.SectionTitle>💡 기획 정보</S.SectionTitle>
                    <p>{project.description}</p>
                </S.Section>

                {/* 4. 활동 정보 섹션 */}
                <S.Section>
                    <S.SectionTitle>🧩 활동 정보</S.SectionTitle>
                    <S.InfoGrid>
                        <SolutionCard title="진행 학기" description={project.date} />
                        <SolutionCard title="프로젝트 유형" description={project.subtitle} />
                        <SolutionCard title="활동 진행회차" description="n회 진행" />
                    </S.InfoGrid>
                    <S.CardRow>
                        <SolutionCard title="활동 블로깅" description="m개" />
                        <SolutionCard title="활동 사진" description="k개" />
                    </S.CardRow>
                </S.Section>

                {/* 5. 참여 크루 섹션 */}
                <S.Section>
                    <S.SectionTitle>👥 참여 크루</S.SectionTitle>
                    <S.CrewGrid>
                        {participatingCrews.map((crew) => (
                            <CrewBlock 
                                key={crew.id}
                                member={crew}
                                isCrewpage={false} // 간략 모드로 렌더링
                                onDetailClick={(id) => console.log(id)}
                            />
                        ))}
                    </S.CrewGrid>
                </S.Section>

                {/* 6. 갤러리 섹션 */}
                <S.Section>
                    <S.SectionTitle>🖼️ 갤러리</S.SectionTitle>
                    {/* 갤러리 이미지 그리드 배치 예정 */}
                </S.Section>
            </S.PageWrapper>
        </>
    );
};

export default ProjectDetailPageTemplate;