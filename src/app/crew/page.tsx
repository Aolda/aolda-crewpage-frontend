//src/app/crew/page.tsx
'use client';
import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { MOCK_CREW_LIST } from './mockData';
import { POSITION_LABEL, PositionValue } from '@/types/crew';
import * as S from './CrewPage.styles';
import BaseTemplate from '@/components/templates/BaseTemplate/BaseTemplate';
import CrewBlock from '@/components/organisms/CrewBlock';
import SearchBox from '@/components/molecules/SearchBox';
import Select from '@/components/molecules/Select';

export default function CrewListPage() {
    const router = useRouter();
    const [searchValue, setSearchValue] = useState(""); // 입력 중인 값
    const [activeSearch, setActiveSearch] = useState(""); // 실제 검색 실행된 값
    const [filters, setFilters] = useState({
        generation: "",
        role: "",
        department: "",
    });

    // 필터 옵션 추출 (데이터에서 중복 제거하여 자동 생성)
    const genOptions = Array.from(new Set(MOCK_CREW_LIST.map(c => `${c.generation}기`))).sort();
    const roleOptions = Object.values(POSITION_LABEL);
    const deptOptions = Array.from(new Set(MOCK_CREW_LIST.map(c => c.department))).sort();

    // 통합 필터링 로직
    const filteredCrew = useMemo(() => {
        return MOCK_CREW_LIST.filter((member) => {
            const matchesSearch = member.name.includes(activeSearch);
            const matchesGen = !filters.generation || `${member.generation}기` === filters.generation;
            const matchesRole = !filters.role || POSITION_LABEL[member.position] === filters.role;
            const matchesDept = !filters.department || member.department === filters.department;

            return matchesSearch && matchesGen && matchesRole && matchesDept;
        }).sort((a, b) => a.position - b.position); // 직책순 정렬 유지
    }, [activeSearch, filters]);

    // 전체 초기화 함수 (#전체 버튼용)
    const resetFilters = () => {
        setFilters({ generation: "", role: "", department: "" });
        setActiveSearch("");
        setSearchValue("");
    };

    // 상세 페이지 이동 함수
    const handleDetailNavigation = (id: string) => {
        // 기본 페이지를 activity로 설정: /crew/[id]/activity
        router.push(`/crew/${id}/activity`);
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
                                onDetailClick={handleDetailNavigation}/>
                        ))
                    ) : (
                        <S.EmptyState>검색 결과가 없습니다. 😅</S.EmptyState>
                    )}
                </S.CrewList>
            </S.ContentContainer>
        </BaseTemplate>
    );
}