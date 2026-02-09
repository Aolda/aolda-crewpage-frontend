//src/app/project/page.tsx

'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import * as S from './ProjectPage.styles';
import BaseTemplate from '@/components/templates/BaseTemplate/BaseTemplate';
import ProjectBlock from '@/components/organisms/ProjectBlock';
import SearchBox from '@/components/molecules/SearchBox';
import OverviewCard from '@/components/molecules/OverviewCard';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { MOCK_PROJECTS } from './mockData';
import ProjectPageTemplate from '@/components/templates/project/ProjectPagetemplate';

export default function ProjectsPage() {
    const router = useRouter();

    const handleProjectNavigation = (id: string) => {
        router.push(`/project/${id}`);
    };

    return (
        <BaseTemplate>
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
                {filteredProjects.map((project) => (
                    <motion.div
                        key={project.id}
                        layout // 카드가 이동할 때 부드럽게 슬라이딩됨
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        exit={{ opacity: 0, scale: 0.9 }} // 필터링 시 사라지는 효과
                        transition={{ duration: 0.3 }}
                    >
                        <ProjectBlock key={project.id} project={project} />
                    </motion.div>
                ))}
            </S.ProjectGrid>
        </BaseTemplate>
    );
}