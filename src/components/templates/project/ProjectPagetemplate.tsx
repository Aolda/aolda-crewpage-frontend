//src/app/project/page.tsx
'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import * as S from './ProjectPageTemplate.styles';
import ProjectBlock from '@/components/organisms/ProjectBlock';
import SearchBox from '@/components/molecules/SearchBox';
import OverviewCard from '@/components/molecules/OverviewCard';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ProjectListResponse, ActivityStatusKey } from '@/types/project';

interface ProjectPageTemplateProps {
    data: ProjectListResponse; 
    onProjectClick: (id: number) => void;
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
    data,
    onProjectClick 
}) => {
    const [searchValue, setSearchValue] = useState("");
    const [activeSearch, setActiveSearch] = useState("");
    const [selectedStatus, setSelectedStatus] = useState<string>("");

    // 입력창의 글자를 모두 지우면 즉시 검색 결과를 초기화
    useEffect(() => {
        if (searchValue === "") {
            setActiveSearch("");
        }
    }, [searchValue]);

    //프로젝트 필터링
    const filteredProjects = useMemo(() => {
        return data.data.projects.filter((project) => {
            // 1. 검색어 필터링 로직 보완
            const matchesSearch = activeSearch === "" 
                ? true  // 검색어가 없으면 무조건 통과
                : project.activityNames.ko.toLowerCase().includes(activeSearch.toLowerCase()) ||
                project.activityNames.en.toLowerCase().includes(activeSearch.toLowerCase());
            
            // 2. 상태 필터링
            const matchesStatus = selectedStatus === "" ? true : project.status === selectedStatus;
            
            return matchesSearch && matchesStatus;
        });
    }, [data.data.projects, activeSearch, selectedStatus]);

    const { statistics } = data.data;

    return (
        <>
            <S.HeaderSection>
                <section className="contentsSection">
                    <section className="textSection">
                        <Image src="/images/project/mascot.png" alt="Mascot" width={160} height={160} className="mascot" />
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

            <S.ContentSection>
                <S.StatsSection>
                    <OverviewCard type={1} totalNum={statistics.projects.total} onGoingNum={statistics.projects.value}/>
                    <OverviewCard type={2} totalNum={statistics.participants.total} onGoingNum={statistics.participants.value}/>
                    <OverviewCard type={3} totalNum={statistics.paran_projects.total} onGoingNum={statistics.paran_projects.value}/>
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
                        {Object.values(data.data.filters.status).map((filter) => (
                            <S.FilterButton 
                                key={filter.key}
                                $isActive={selectedStatus === filter.key}
                                onClick={() => setSelectedStatus(filter.key)}
                            >
                                {filter.value}
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
                                key={project.activityId}
                                layout // 카드가 이동할 때 부드럽게 슬라이딩됨
                                onClick={() => onProjectClick(project.activityId)}
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                                exit={{ opacity: 0, scale: 0.9 }} // 필터링 시 사라지는 효과
                                transition={{ duration: 0.3 }}
                            >
                                <ProjectBlock key={project.activityId} project={project} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </S.ProjectGrid>
            </S.ContentSection>
        </>
    );
}

export default ProjectPageTemplate