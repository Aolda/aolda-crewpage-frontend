import Link from 'next/link';
import * as S from './BreadCrump.styles';

export interface BreadcrumbItem {
    /** 라벨 */
    label: string;
    /** 링크 경로 */
    href?: string;
}

export interface BreadcrumbProps {
    /** Breadcrumb 항목 목록 */
    items: BreadcrumbItem[];
}

/**
    * Breadcrumb 컴포넌트
    * 
    * 페이지 경로를 표시하는 네비게이션 컴포넌트입니다.
    * 
    * @param {BreadcrumbProps} props - Breadcrumb props
    * @param {BreadcrumbItem[]} props.items - Breadcrumb 항목 목록
    * 
    * @example
    * <Breadcrumb
    *   items={[
    *     { label: '홈', href: '/' },
    *     { label: '공지사항', href: '/notice' },
    *   ]}
    * />
    * 
    *  @returns {JSX.Element} Breadcrumb 요소
*/
const Breadcrumb = ({ items }: BreadcrumbProps) => {
    return (
        <S.Breadcrumb>
        {items.map((item, index) => (
            <S.BreadcrumbItem key={index}>
            {item.href ? (
                <S.BreadcrumbLink as={Link} href={item.href}>{item.label}</S.BreadcrumbLink>
            ) : (
                <S.BreadcrumbText>{item.label}</S.BreadcrumbText>
            )}
            {index < items.length - 1 && <S.Separator> &gt; </S.Separator>}
            </S.BreadcrumbItem>
        ))}
        </S.Breadcrumb>
    );
};

export default Breadcrumb;

