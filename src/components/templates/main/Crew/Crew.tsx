'use client';

import React, { useMemo, useState } from 'react';
import MainSection from '../MainSection/MainSection';
import CrewBlock from '@/components/organisms/CrewBlock';
import { CrewMember } from '@/types/crew';
import * as S from './Crew.styles';

interface CrewProps {
    crews: CrewMember[];
    onCrewClick: (id: string) => void; // 카드 클릭 시 호출될 함수
}

const Crew = ({ crews, onCrewClick }: CrewProps) => {
    // 1. 사용 가능한 기수 목록 추출 및 정렬 (내림차순)
    const generations = useMemo(() => {
        const gens = Array.from(new Set(crews.map(c => c.generation)));
        return gens.sort((a, b) => a - b);
    }, [crews]);

    // 2. 현재 선택된 기수 상태 (초기값은 가장 최신 기수)
    const [activeGen, setActiveGen] = useState<number>(generations[0]);

    // 3. 현재 기수의 크루들을 직책순으로 정렬하여 필터링
    const displayCrews = useMemo(() => {
        return crews
        .filter(member => member.generation === activeGen)
        .sort((a, b) => a.position - b.position); // 직책 숫자 기준 오름차순 정렬 (0: 회장, 1: 부회장...)
    }, [crews, activeGen]);
    return (
        <MainSection
        label="Crew"
        title={<>아올다와 성장하는<br/><strong>핵심 인재들</strong></>}
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
                            onClick={() => setActiveGen(gen)}
                        >
                        {gen}기
                        </S.GenButton>
                    ))}
                </S.GenerationPagination>

                {/* 정렬된 크루 그리드 */}
                <S.CrewGrid>
                {displayCrews.map((member) => (
                    <CrewBlock 
                        key={member.id} 
                        member={member} 
                        isCrewpage={false} 
                        onDetailClick={onCrewClick}
                    />
                ))}
                </S.CrewGrid>
            </S.CrewSection>
        </MainSection>
    );
};

export default Crew;