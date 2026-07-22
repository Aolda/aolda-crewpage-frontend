// /src/components/templates/crew/CrewPageTemplate.tsx
'use client';

import React, { useEffect, useRef, useState, useMemo } from 'react';
import { CrewMember, DEPARTMENT_TYPE } from '@/types/crew';
import * as S from './CrewPageTemplate.styles';
import CrewBlock from '@/components/organisms/CrewBlock';
import SearchBox from '@/components/molecules/SearchBox';
import Select from '@/components/molecules/Select';

interface CrewPageTemplateProps {
    crewList: CrewMember[];                 // 실제 서버나 Mock에서 올 데이터
    children: React.ReactNode;
    onDetailClick: (id: number) => void;    //클릭 이벤트 발생시 실행될 함수(디테일 페이지 라우팅)
}

const CrewPageTemplate: React.FC<CrewPageTemplateProps> = ({ 
    crewList,
    children,
    onDetailClick
}) => {
    const [searchValue, setSearchValue] = useState("");
    const [filters, setFilters] = useState({
        generation: "",
        role: "",
        department: "",
    });
    const generationWasChosen = useRef(false);

    //카테고리 항목(위에서부터 기수, 역할, 학과)
    const genOptions = useMemo(() => 
        Array.from(new Set(crewList.map(c => `${c.joinedGen}기`))).sort(), 
        [crewList]
    );
    const roleOptions = Object.values(DEPARTMENT_TYPE);
    const deptOptions = useMemo(() => 
        Array.from(new Set(crewList.map(c => c.univDepartment))).sort(), 
        [crewList]
    );

    useEffect(() => {
        if (
            generationWasChosen.current ||
            filters.generation ||
            crewList.length === 0 ||
            !window.matchMedia('(max-width: 767px)').matches
        ) {
            return;
        }

        const latestGeneration = Math.max(...crewList.map((crew) => crew.joinedGen));
        const timer = window.setTimeout(() => {
            setFilters((previous) => ({
                ...previous,
                generation: `${latestGeneration}기`,
            }));
        }, 0);

        return () => window.clearTimeout(timer);
    }, [crewList, filters.generation]);

    //검색 또는 카테고리로 필터링된 크루
    const filteredCrew = useMemo(() => {
        return crewList.filter((member) => {
            // 가장 최근 활동 로그의 역할명을 가져옵니다.
            const currentRoleName = DEPARTMENT_TYPE[member.crewLog[0]?.department];

            const matchesSearch = member.crewName.toLowerCase().includes(searchValue.toLowerCase());
            const matchesGen = !filters.generation || `${member.joinedGen}기` === filters.generation;
            const matchesRole = !filters.role || currentRoleName === filters.role;
            const matchesDept = !filters.department || member.univDepartment === filters.department;
            
            return matchesSearch && matchesGen && matchesRole && matchesDept;
        }).sort((a, b) => a.crewId - b.crewId); // position 대신 crewId로 정렬
    }, [crewList, searchValue, filters]);

    //필터링 초기화
    const resetFilters = () => {
        generationWasChosen.current = true;
        setFilters({ generation: "", role: "", department: "" });
        setSearchValue("");
    };

    return (
        <>
            <S.HeaderBackground>
                <S.HeaderContent>
                    <h1>아올다와 함께 성장하는<br />핵심 인재들</h1>
                    <SearchBox 
                        value={searchValue}
                        onChange={(e) => {setSearchValue(e.target.value)}}
                        placeholder="크루를 검색해 보세요."
                    />
                </S.HeaderContent>
            </S.HeaderBackground>

            <S.ContentContainer>
                <S.FilterBar>
                    <S.AllButton 
                        $isActive={!filters.generation && !filters.role && !filters.department && !searchValue}
                        onClick={resetFilters}
                    >
                        #전체
                    </S.AllButton>

                    <Select 
                        label="generation" 
                        options={genOptions} 
                        selectedValue={filters.generation}
                        onSelectChange={(val) => {
                            generationWasChosen.current = true;
                            setFilters(p => ({ ...p, generation: val }));
                        }}
                    />
                    <Select 
                        label="role" 
                        options={roleOptions}
                        selectedValue={filters.role}
                        onSelectChange={(val) => setFilters(p => ({ ...p, role: val }))} 
                    />
                    <Select 
                        label="department" 
                        options={deptOptions} 
                        selectedValue={filters.department}
                        onSelectChange={(val) => setFilters(p => ({ ...p, department: val }))} 
                    />
                </S.FilterBar>

                <S.CrewList>
                    {filteredCrew.length > 0 ? (
                        filteredCrew.map((member) => (
                            <CrewBlock
                                key={member.crewId}
                                member={member}
                                isCrewpage={true}
                                onDetailClick={onDetailClick}
                            />
                        ))
                    ) : (
                        <S.EmptyState>검색 결과가 없습니다.</S.EmptyState>
                    )}
                </S.CrewList>
            </S.ContentContainer>
            {children}
        </>
    );
};

export default CrewPageTemplate;
