import * as S from './SolutionCard.styles';

export interface SolutionCardProps {
    /** 해결책 제목 */
    title: string;
    /** 해결책 설명 */
    description: string;
}

/**
 * 해결책 카드 컴포넌트
 * 
 * 해결책 섹션에서 사용되는 개별 해결책 카드입니다.
 * 
 * @param {SolutionCardProps} props - 해결책 카드 props
 * @param {string} props.title - 해결책 제목
 * @param {string} props.description - 해결책 설명
 * 
 * @example
 * <SolutionCard
 *   title="접근성"
 *   description="검수 과정 없이 즉시 사용 가능"
 * />
 * 
 * @returns {JSX.Element} 해결책 카드 요소
 */
const SolutionCard = ({ title, description }: SolutionCardProps) => {
    return (
        <S.SolutionCard>
            <S.SolutionTitle>{title}</S.SolutionTitle>
            <S.SolutionDescription>{description}</S.SolutionDescription>
        </S.SolutionCard>
    );
};

export default SolutionCard;

