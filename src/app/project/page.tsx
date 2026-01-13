//src/app/project/page.tsx
'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import * as S from './ProjectPage.styles';
import BaseTemplate from '@/components/templates/BaseTemplate/BaseTemplate';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';
import ProjectBlock from '@/components/molecules/ProjectBlock';
import SearchBox from '@/components/molecules/SearchBox';
import OverviewCard from '@/components/molecules/OverviewCard';
import { MOCK_PROJECTS } from './mockData';
import { ProjectStatus } from '@/types/project';

// 버튼에 표시될 라벨들 (실제 상태값과 매핑)
const FILTER_OPTIONS: { label: string; value: ProjectStatus | "" }[] = [
    { label: '기획중', value: 'PLANNING' },
    { label: '진행중', value: 'ONGOING' },
    { label: '완료', value: 'DONE' },
];

export default function ProjectListPage() {

    const [searchValue, setSearchValue] = useState("");
    const [activeSearch, setActiveSearch] = useState("");
    const [selectedStatus, setSelectedStatus] = useState<ProjectStatus | "">("");

    const filteredProjects = useMemo(() => {
        return MOCK_PROJECTS.filter((project) => {
            const matchesSearch = project.title.toLowerCase().includes(activeSearch.toLowerCase());
            // selectedStatus가 빈 문자열이면 모든 상태를 허용(true)합니다.
            const matchesStatus = selectedStatus === "" ? true : project.status === selectedStatus;
            
            return matchesSearch && matchesStatus;
        });
    }, [activeSearch, selectedStatus]);

    return (
        <S.PageWrapper>
            <BaseTemplate>
                <S.HeaderSection>
                    <section className="contentsSection">
                        <section className="textSection">
                            <Image src="/mascot.png" alt="Mascot" width={160} height={160} className="mascot" />
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
                    <OverviewCard type={1} totalNum={20} onGoingNum={13}/>
                    <OverviewCard type={2} totalNum={20} onGoingNum={13}/>
                    <OverviewCard type={3} totalNum={20} onGoingNum={13}/>
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
                
                <S.ProjectGrid>
                    {filteredProjects.map((project) => (
                        <ProjectBlock key={project.id} project={project} />
                    ))}
                </S.ProjectGrid>
            </BaseTemplate>
        </S.PageWrapper>
    );
}