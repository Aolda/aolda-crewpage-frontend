// /src/components/templates/crew/CrewPageTemplate.tsx
'use client';

import React, { useState, useMemo, useSyncExternalStore } from 'react';
import { CrewMember, DepartmentMap } from '@/types/crew';
import * as S from './CrewPageTemplate.styles';
import CrewBlock from '@/components/organisms/CrewBlock';
import SearchBox from '@/components/molecules/SearchBox';
import Select from '@/components/molecules/Select';
import Pagination from '@/components/molecules/Pagination';

const ITEMS_PER_PAGE = 8;
const MOBILE_QUERY = '(max-width: 743px)';

// 필터 옵션에 표시하지 않을 더미 코드
const HIDDEN_DEPARTMENT_CODES = ['DUMMY_TEAM_NOT_FETCHED_YET'];

const subscribeToMobileQuery = (callback: () => void) => {
    const mediaQuery = window.matchMedia(MOBILE_QUERY);
    mediaQuery.addEventListener('change', callback);

    return () => mediaQuery.removeEventListener('change', callback);
};

const getMobileSnapshot = () => window.matchMedia(MOBILE_QUERY).matches;
const getServerMobileSnapshot = () => false;

interface CrewPageTemplateProps {
    crewList: CrewMember[];                 // 실제 서버나 Mock에서 올 데이터
    departments: DepartmentMap;             // /team/department API 응답
    onDetailClick: (id: number) => void;    // 클릭 이벤트 발생시 실행될 함수(디테일 페이지 라우팅)
}

const CrewPageTemplate: React.FC<CrewPageTemplateProps> = ({
    crewList,
    departments,
    onDetailClick
}) => {
    const [searchValue, setSearchValue] = useState("");
    const [filters, setFilters] = useState({
        generation: "",
        role: "",
        department: "",
    });
    const [currentPage, setCurrentPage] = useState(1);
    const isMobile = useSyncExternalStore(
        subscribeToMobileQuery,
        getMobileSnapshot,
        getServerMobileSnapshot
    );

    const handleSearchChange = (value: string) => {
        setSearchValue(value);
        setCurrentPage(1);
    };

    const handleFilterChange = (key: keyof typeof filters, value: string) => {
        setFilters(prev => ({ ...prev, [key]: value }));
        setCurrentPage(1);
    };

    // 기수 옵션
    const genOptions = useMemo(() =>
        Array.from(new Set(crewList.map(c => `${c.joinedGen}기`))).sort(),
        [crewList]
    );

    // 부서 필터 옵션 — API에서 받은 departments 사용, 더미 코드 제외
    const roleOptions = useMemo(() =>
        Object.entries(departments)
            .filter(([code]) => !HIDDEN_DEPARTMENT_CODES.includes(code))
            .map(([, name]) => name),
        [departments]
    );

    // 학과 옵션
    const deptOptions = useMemo(() =>
        Array.from(new Set(crewList.map(c => c.univDepartment))).sort(),
        [crewList]
    );

    // 검색 또는 카테고리로 필터링된 크루
    const filteredCrew = useMemo(() => {
        return crewList.filter((member) => {
            // 가장 최근 활동 로그의 부서 코드를 API 데이터로 변환
            const currentRoleName = departments[member.crewLog[0]?.department] ?? '';

            const matchesSearch = member.crewName.toLowerCase().includes(searchValue.toLowerCase());
            const matchesGen = !filters.generation || `${member.joinedGen}기` === filters.generation;
            const matchesRole = !filters.role || currentRoleName === filters.role;
            const matchesDept = !filters.department || member.univDepartment === filters.department;

            return matchesSearch && matchesGen && matchesRole && matchesDept;
        }).sort((a, b) => a.crewId - b.crewId); // position 대신 crewId로 정렬
    }, [crewList, departments, searchValue, filters]);

    // 현재 페이지에 맞게 슬라이싱
    const displayedCrew = useMemo(() => {
        if (isMobile) {
            return filteredCrew;
        }

        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        return filteredCrew.slice(start, start + ITEMS_PER_PAGE);
    }, [filteredCrew, currentPage, isMobile]);

    //필터링 초기화
    const resetFilters = () => {
        setFilters({ generation: "", role: "", department: "" });
        setSearchValue("");
        setCurrentPage(1);
    };

    return (
        <>
            <S.HeaderBackground>
                <S.HeaderContent>
                    <h1>아올다와 함께 성장하는<br />핵심 인재들</h1>
                    <SearchBox 
                        value={searchValue}
                        onChange={(e) => handleSearchChange(e.target.value)}
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
                        clearOptionLabel="전체 기수"
                        onSelectChange={(val) => handleFilterChange('generation', val)}
                    />
                    <Select 
                        label="role" 
                        options={roleOptions}
                        selectedValue={filters.role}
                        clearOptionLabel="전체 역할"
                        onSelectChange={(val) => handleFilterChange('role', val)}
                    />
                    <Select 
                        label="department" 
                        options={deptOptions} 
                        selectedValue={filters.department}
                        clearOptionLabel="전체 학과"
                        onSelectChange={(val) => handleFilterChange('department', val)}
                    />
                </S.FilterBar>

                <S.CrewList>
                    {displayedCrew.length > 0 ? (
                        displayedCrew.map((member) => (
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
            {!isMobile && (
                <Pagination
                    current={currentPage}
                    total={filteredCrew.length}
                    pageSize={ITEMS_PER_PAGE}
                    onPageChange={setCurrentPage}
                />
            )}
        </>
    );
};

export default CrewPageTemplate;
