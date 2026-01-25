//src/app/project/page.tsx
'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import * as S from './ProjectPageTemplate.styles';
import BaseTemplate from '@/components/templates/BaseTemplate/BaseTemplate';
import ProjectBlock from '@/components/molecules/ProjectBlock';
import SearchBox from '@/components/molecules/SearchBox';
import OverviewCard from '@/components/molecules/OverviewCard';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Project } from '@/types/project';
import { ProjectStatus } from '@/types/project';

// 버튼에 표시될 라벨들 (실제 상태값과 매핑)
const FILTER_OPTIONS: { label: string; value: ProjectStatus | "" }[] = [
    { label: '기획중', value: 'PLANNING' },
    { label: '진행중', value: 'ONGOING' },
    { label: '완료', value: 'DONE' },
];

interface ProjectPageTemplateProps {
    projectList: Project[];
    onProjectClick: (id: string) => void;
}

// 애니메이션 설정값
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // 자식 요소들이 0.1초 간격으로 나타남
        },
    },
};

const itemVariants: Variants = {
    hidden: { 
        opacity: 0, 
        y: "1.25rem" // 20px -> 1.25rem (문자열로 명시)
    },
    visible: { 
        opacity: 1, 
        y: "0rem", 
        transition: { 
            duration: 0.5, 
            ease: "easeOut" 
        } 
    },
};

const ProjectPageTemplate: React.FC<ProjectPageTemplateProps> = ({ 
    projectList,
    onProjectClick 
}) => {
    const [searchValue, setSearchValue] = useState("");
    const [activeSearch, setActiveSearch] = useState("");
    const [selectedStatus, setSelectedStatus] = useState<ProjectStatus | "">("");

    //프로젝트 필터링
    const filteredProjects = useMemo(() => {
        return projectList.filter((project) => {
            const matchesSearch = project.title.toLowerCase().includes(activeSearch.toLowerCase());
            const matchesStatus = selectedStatus === "" ? true : project.status === selectedStatus;
            
            return matchesSearch && matchesStatus;
        });
    }, [activeSearch, selectedStatus]);

    //OverviewCard에 들어갈 데이터 정리
    const stats = useMemo(() => {
        // 1. 프로젝트 수 관련
        const totalProjects = projectList.length;
        const ongoingProjects = projectList.filter(p => p.status === 'ONGOING').length;
    
        // 2. 참여 크루원 관련 (중복 제거)
        const allMemberIds = new Set(projectList.flatMap(p => p.memberIds));
        const ongoingMemberIds = new Set(
            projectList.filter(p => p.status === 'ONGOING').flatMap(p => p.memberIds)
        );
    
        // 3. 파란학기연계 관련 (추후 데이터 형식에 추가 예정)
        const totalParan = 13; 
        const onGoingParan = 6;
    
        return {
            projects: { total: totalProjects, current: ongoingProjects },
            crews: { total: allMemberIds.size, current: ongoingMemberIds.size },
            parans: { total: totalParan, current: onGoingParan },
        };
    }, []);

    return (
        <S.PageWrapper>
            <BaseTemplate>
                <S.HeaderSection>
                    <section className="contentsSection">
                        <section className="textSection">
                            <Image src="/project/mascot.png" alt="Mascot" width={160} height={160} className="mascot" />
                            <h1>클라우드 실전 역량을 쌓는<br /><strong>핵심 Activity</strong></h1>
                            <p>아올다는 기획, 개발, 운영 전반을 아우르는 활동들을 통해<br />클라우드 분야의 실질적인 전문가로 성장합니다.</p>
                        </section>
                        <SearchBox 
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            onSearch={(query) => setActiveSearch(query)}
                            placeholder="프로젝트를 검색해 보세요."
                        />
                    </section>
                    <div className="ellipse1"></div>
                    <div className="ellipse2"></div>
                    <div className="ellipse3"></div>
                </S.HeaderSection>

                <S.StatsSection>
                    <OverviewCard type={1} totalNum={stats.projects.total} onGoingNum={stats.projects.current}/>
                    <OverviewCard type={2} totalNum={stats.crews.total} onGoingNum={stats.crews.current}/>
                    <OverviewCard type={3} totalNum={stats.parans.total} onGoingNum={stats.parans.current}/>
                </S.StatsSection>

                <S.FilterBar>
                    <S.LeftButtonGroup>
                        {/* 크루 페이지와 동일한 '#전체' 버튼 로직 */}
                        <S.FilterButton 
                            $isActive={selectedStatus === ""}
                            onClick={() => setSelectedStatus("")}
                        >
                            #전체
                        </S.FilterButton>

                        {/* 나머지 상태 버튼들 */}
                        {FILTER_OPTIONS.map((opt) => (
                            <S.FilterButton 
                                key={opt.value}
                                $isActive={selectedStatus === opt.value}
                                onClick={() => setSelectedStatus(opt.value as ProjectStatus)}
                            >
                                {opt.label}
                            </S.FilterButton>
                        ))}
                    </S.LeftButtonGroup>
                    
                    {/* ... Select 컴포넌트 생략 ... */}
                </S.FilterBar>
                
                <S.ProjectGrid
                    as={motion.main} // Styled-components를 motion으로 확장
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout // 카드가 이동할 때 부드럽게 슬라이딩됨
                                onClick={() => onProjectClick(project.id)}
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                                exit={{ opacity: 0, scale: 0.9 }} // 필터링 시 사라지는 효과
                                transition={{ duration: 0.3 }}
                            >
                                <ProjectBlock key={project.id} project={project} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </S.ProjectGrid>
            </BaseTemplate>
        </S.PageWrapper>
    );
}

export default ProjectPageTemplate