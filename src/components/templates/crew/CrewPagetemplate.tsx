'use client';

import React, { useState, useMemo } from 'react';
import { CrewMember, POSITION_LABEL } from '@/types/crew';
import * as S from './CrewPageTemplate.styles';
import BaseTemplate from '@/components/templates/BaseTemplate/BaseTemplate';
import CrewBlock from '@/components/molecules/CrewBlock';
import SearchBox from '@/components/molecules/SearchBox';
import Select from '@/components/molecules/Select';

interface CrewPageTemplateProps {
    crewList: CrewMember[]; // 실제 서버나 Mock에서 올 데이터
    onDetailClick: (id: string) => void;
}

const CrewPageTemplate: React.FC<CrewPageTemplateProps> = ({ 
    crewList, 
    onDetailClick 
}) => {
    const [searchValue, setSearchValue] = useState("");
    const [activeSearch, setActiveSearch] = useState("");
    const [filters, setFilters] = useState({
        generation: "",
        role: "",
        department: "",
    });

    // 템플릿 내에서 이루어지는 데이터 처리 (팀장님 가이드 반영)
    const genOptions = useMemo(() => 
        Array.from(new Set(crewList.map(c => `${c.generation}기`))).sort(), 
        [crewList]
    );
    const roleOptions = Object.values(POSITION_LABEL);
    const deptOptions = useMemo(() => 
        Array.from(new Set(crewList.map(c => c.department))).sort(), 
        [crewList]
    );

    const filteredCrew = useMemo(() => {
        return crewList.filter((member) => {
            const matchesSearch = member.name.includes(activeSearch);
            const matchesGen = !filters.generation || `${member.generation}기` === filters.generation;
            const matchesRole = !filters.role || POSITION_LABEL[member.position] === filters.role;
            const matchesDept = !filters.department || member.department === filters.department;
            return matchesSearch && matchesGen && matchesRole && matchesDept;
        }).sort((a, b) => a.position - b.position);
    }, [crewList, activeSearch, filters]);

    const resetFilters = () => {
        setFilters({ generation: "", role: "", department: "" });
        setActiveSearch("");
        setSearchValue("");
    };

    return (
        <BaseTemplate>
            <S.HeaderBackground>
                <S.HeaderContent>
                    <h1>아올다와 함께 성장하는<br /><strong>핵심 인재들</strong></h1>
                    <SearchBox 
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onSearch={(query) => setActiveSearch(query)}
                        placeholder="크루를 검색해 보세요."
                    />
                </S.HeaderContent>
            </S.HeaderBackground>

            <S.ContentContainer>
                <S.FilterBar>
                    <S.AllButton 
                        $isActive={!filters.generation && !filters.role && !filters.department && !activeSearch}
                        onClick={resetFilters}
                    >
                        #전체
                    </S.AllButton>

                    <Select 
                        label="generation" 
                        options={genOptions} 
                        selectedValue={filters.generation}
                        onSelectChange={(val) => setFilters(p => ({ ...p, generation: val }))} 
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
                                key={member.id}
                                member={member}
                                isHomepage={false}
                                onDetailClick={onDetailClick}
                            />
                        ))
                    ) : (
                        <S.EmptyState>검색 결과가 없습니다. 😅</S.EmptyState>
                    )}
                </S.CrewList>
            </S.ContentContainer>
        </BaseTemplate>
    );
};

export default CrewPageTemplate;