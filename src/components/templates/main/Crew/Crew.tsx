// /src/components/templates/main/Crew/Crew.tsx
'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import MainSection from '../MainSection/MainSection';
import CrewBlock from '@/components/organisms/CrewBlock';
import { CrewMember } from '@/types/crew';
import * as S from './Crew.styles';

// 역할별 정렬 우선순위 정의 (회장 > 부회장 > 총무 > 일반 크루원)
const ROLE_PRIORITY: Record<string, number> = {
    'CREW_ROLE/P': 0,
    'CREW_ROLE/VP': 1,
    'CREW_ROLE/EA': 2,
    'CREW_ROLE/CREW': 3,
};

interface CrewProps {
    crews: CrewMember[];
    onCrewClick: (id: number) => void; // 카드 클릭 시 호출될 함수
}

const Crew = ({ crews, onCrewClick }: CrewProps) => {
    // 사용 가능한 기수 목록 추출 및 정렬 (내림차순)
    const generations = useMemo(() => {
        const gens = Array.from(new Set(crews.map(c => c.joinedGen)));
        return gens.sort((a, b) => a - b);
    }, [crews]);

    const defaultGen = useMemo(() => {
        return generations.includes(0) ? 0 : (generations[0] || 0);
    }, [generations]);

    // 초기값 설정 (피그마 기준 0기를 우선 노출)
    const [selectedGen, setSelectedGen] = useState<number | null>(null);
    const activeGen = selectedGen !== null && generations.includes(selectedGen) ? selectedGen : defaultGen;

    // 3. 현재 기수의 크루들을 직책순으로 정렬하여 필터링
    const displayCrews = useMemo(() => {
        return crews
        .filter(member => member.joinedGen === activeGen)
        .sort((a, b) => {
            const roleA = a.crewLog[0]?.type || 'CREW_ROLE/CREW';
            const roleB = b.crewLog[0]?.type || 'CREW_ROLE/CREW';
            
            // 1순위: 역할 우선순위
            if (ROLE_PRIORITY[roleA] !== ROLE_PRIORITY[roleB]) {
                return ROLE_PRIORITY[roleA] - ROLE_PRIORITY[roleB];
            }
            // 2순위: 이름 가나다순
            return a.crewName.localeCompare(b.crewName);
        });
    }, [crews, activeGen]);
    return (
        <MainSection
        label="Crew"
        title={<>아올다와 성장하는<br/><span>핵심 인재들</span></>}
        description={<>열정적인 개발자, 기획자, 디자이너, 운영자로 구성된<br />
            아올다 멤버들은 서로의 성장을 돕는 동반자로서, 아주대학교를 넘어<br />
            IT 분야의 미래를 함께 설계하고 있습니다.</>}
        >
            <S.CrewSection>
                {/* 기수 페이지네이션 */}
                <S.GenerationPagination>
                    {generations.map((gen) => (
                        <S.GenButton
                            key={gen}
                            $isActive={activeGen === gen}
                            onClick={() => setSelectedGen(gen)}
                        >
                            {gen}기
                        </S.GenButton>
                    ))}
                </S.GenerationPagination>

                {/* 크루 그리드 (모바일: 배경 이미지 래퍼) */}
                <S.CrewGridWrapper>
                    <S.RectangleWrapper>
                        <S.Rectangle1 />
                        <S.Rectangle2 />
                        <S.Rectangle3 />
                    </S.RectangleWrapper>

                    <S.CrewGrid>
                        {displayCrews.map((member) => (
                            <CrewBlock
                                key={member.crewId}
                                member={member}
                                isCrewpage={false}
                                onDetailClick={onCrewClick}
                            />
                        ))}
                    </S.CrewGrid>

                </S.CrewGridWrapper>

                <Link href="/crew" passHref legacyBehavior>
                    <S.CrewMoreLink>크루 더보기</S.CrewMoreLink>
                </Link>
            </S.CrewSection>
        </MainSection>
    );
};

export default Crew;
