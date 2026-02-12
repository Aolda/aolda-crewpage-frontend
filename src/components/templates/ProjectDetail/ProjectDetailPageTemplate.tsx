'use client';

import React from 'react';
import Image from 'next/image';
import * as S from './ProjectDetailPageTemplate.styles';
import BreadCrumb from '@/components/molecules/BreadCrump';
import SolutionCard from '@/components/molecules/SolutionCard';
import CrewBlock from '@/components/organisms/CrewBlock'; // 추가
import { CrewMember } from '@/types/crew';
import { ProjectDetailResponse, PROJECT_TYPE } from '@/types/project';

interface ProjectDetailPageTemplateProps {
    project: ProjectDetailResponse;
}

const ProjectDetailPageTemplate = ({ project }: ProjectDetailPageTemplateProps) => {
    const semesterText = project.contents.activityInfo.startedAt.join(', ');
    // 예시 데이터 (실제로는 API나 Props로 받게 됩니다)
    const projectTypeText = PROJECT_TYPE[project.contents.activityInfo.projectType];
    // Breadcrumb 데이터
    const breadcrumbItems = [
        { label: '홈', href: '/' },
        { label: '주요 활동', href: '/project' },
        { label: project.activityNames.ko, href: '#' },
    ];

    return (
        <>
            <S.HeaderBackground $bgColor={"orange"}>
                <Image src={project.backgroundImage.url} alt={project.activityNames.en} width={400} height={300}/>
                <S.HeaderSection>
                    <BreadCrumb items={breadcrumbItems} />
                    <h1>{project.activityNames.en}</h1>
                    <p>{project.activityNames.ko}</p>
                </S.HeaderSection>
            </S.HeaderBackground>
            <S.PageWrapper>
                {/* 2. 헤더 섹션 */}

                {/* 3. 기획 정보 섹션 */}
                <S.Section style={{"paddingTop": "3.75rem"}}>
                    <S.SectionTitle>💡 기획 정보</S.SectionTitle>
                    <p style={{
                        fontSize: "1rem", 
                        lineHeight: "1.8", 
                        whiteSpace: "pre-wrap" // \n, \t 처리를 위해 필수
                    }}>
                        {project.contents.ideaBackground}
                    </p>
                </S.Section>

                {/* 4. 활동 정보 섹션 */}
                <S.Section>
                    <S.SectionTitle>🧩 활동 정보</S.SectionTitle>
                    <S.InfoGrid>
                        <SolutionCard title="진행 학기" description={semesterText} />
                        <SolutionCard title="프로젝트 유형" description={projectTypeText} />
                        <SolutionCard title="활동 진행회차" description={`${project.contents.activityInfo.activityCounts}회 진행`} />
                        <SolutionCard title="활동 블로깅" description={`${project.contents.activityInfo.bloggingCounts}개`} />
                        <SolutionCard title="활동 사진" description={`${project.gallery.length}개`} />
                    </S.InfoGrid>
                </S.Section>

                {/* 5. 참여 크루 섹션 */}
                <S.Section>
                    <S.SectionTitle>👥 참여 크루</S.SectionTitle>
                    <S.CrewGrid>
                        {project.participants.map((crew) => (
                            <CrewBlock 
                                key={crew.crewId}
                                member={{
                                    ...crew, // crewId, profile, crewName, univDepartment, univJoinedYear 포함
                                    crewLog: [],           // 상세 데이터가 없으므로 빈 배열
                                    isActive: true,        // 기본값 설정
                                    joinedGen: 0,          // 기본값 설정
                                    totalActivities: 0,    // 기본값 설정
                                    totalBloggings: 0      // 기본값 설정
                                }}
                                isCrewpage={false} // 간략 모드로 렌더링
                                onDetailClick={(id) => console.log(id)}
                            />
                        ))}
                    </S.CrewGrid>
                </S.Section>

                {/* 6. 갤러리 섹션 */}
                <S.Section>
                    <S.SectionTitle>🖼️ 갤러리</S.SectionTitle>
                    <p style={{"fontSize": "1.25rem"}}>본 활동에서 진행된 활동 사진들의 공간</p>
                    <S.GalleryGrid>
                        {project.gallery.map((photo) => (
                            <S.GalleryItem key={photo.photoId}>
                                <Image src={photo.content.url} alt="활동 사진" fill style={{ objectFit: 'cover' }} />
                            </S.GalleryItem>
                        ))}
                    </S.GalleryGrid>
                </S.Section>
            </S.PageWrapper>
        </>
    );
};

export default ProjectDetailPageTemplate;