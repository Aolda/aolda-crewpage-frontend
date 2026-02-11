import { useMemo } from 'react';
import * as S from './SimilarServiceCard.styles';

export interface SimilarServiceCardProps {
    /** 
    * 서비스 로고 이미지 경로 (선택)
    * - 제공하지 않으면 href에서 도메인을 추출하여 Google Favicon API로 자동 로드
    * - public 폴더 경로 (예: "/logos/aws-logo.png") 또는 외부 URL 모두 지원
    */
    logo?: string;
    /** 서비스 제목 */
    title: string;
    /** 서비스 설명 */
    description: string;
    /** 서비스 링크 */
    href: string;
    /** 서비스 제공자 */
    provider?: string;
}

/**
 * URL에서 도메인을 추출하는 함수
 */
const getDomainFromUrl = (url: string): string => {
    try {
        const urlObj = new URL(url);
        return urlObj.hostname.replace('www.', '');
    } catch {
        return '';
    }
};

/**
 * 도메인에서 favicon URL을 생성하는 함수
 * Google Favicon API 사용
 */
const getFaviconUrl = (domain: string): string => {
    // sz 파라미터 제거 (기본 크기 사용) 또는 더 작은 크기 사용
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
};

/**
 * 유사 서비스 카드 컴포넌트
 * 
 * 유사 서비스 섹션에서 사용되는 개별 서비스 카드입니다.
 * 외부 링크로 연결되는 카드 형태의 컴포넌트입니다.
 * 
 * 기본 동작: logo prop이 없으면 href에서 도메인을 추출하여 Google Favicon API로 자동 로드
 * 커스텀 로고: logo prop을 제공하면 해당 이미지 사용 (public 폴더 또는 외부 URL 모두 가능)
 * 
 * @param {SimilarServiceCardProps} props - 유사 서비스 카드 props
 * @param {string} [props.logo] - 서비스 로고 이미지 경로 (기본값: 자동 favicon)
 * @param {string} props.title - 서비스 제목
 * @param {string} props.description - 서비스 설명
 * @param {string} props.href - 서비스 링크
 * @param {string} [props.provider] - 서비스 제공자
 * 
 * @example
 * // 기본 사용 (자동 favicon)
 * <SimilarServiceCard
 *   title="Amazon RDS"
 *   description="관계형 데이터베이스 서비스"
 *   href="https://aws.amazon.com/ko/rds/"
 *   provider="Amazon Web Services, Inc."
 * />
 * 
 * @example
 * // 커스텀 로고 사용 (public 폴더)
 * <SimilarServiceCard
 *   logo="/logos/aws-logo.png"
 *   title="Amazon RDS"
 *   description="관계형 데이터베이스 서비스"
 *   href="https://aws.amazon.com/ko/rds/"
 * />
 * 
 * @returns {JSX.Element} 유사 서비스 카드 요소
 */
const SimilarServiceCard = ({
    logo,
    title,
    description,
    href,
    provider,
}: SimilarServiceCardProps) => {
    // logo prop이 없으면 외부 링크(Google Favicon API)로 자동 로드
    // logo prop이 있으면 해당 이미지 사용 (public 폴더 또는 외부 URL 모두 가능)
    const logoUrl = useMemo(() => {
        if (logo) return logo;
        // 기본 동작: href에서 도메인 추출하여 Google Favicon API 사용
        const domain = getDomainFromUrl(href);
        return domain ? getFaviconUrl(domain) : '';
    }, [logo, href]);

    const domain = useMemo(() => getDomainFromUrl(href), [href]);

    const handleMainImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        // 메인 이미지 로딩 실패 시 콘솔에 로그 출력
        console.warn('메인 이미지 로딩 실패:', e.currentTarget.src);
        // 실패해도 배경은 유지
    };

    const handleSmallImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        // 작은 이미지 로딩 실패 시 재시도 (더 작은 크기로)
        const currentSrc = e.currentTarget.src;
        if (currentSrc.includes('sz=64')) {
        // 이미 재시도한 경우 숨김
        e.currentTarget.style.display = 'none';
        return;
        }
        // 더 작은 크기로 재시도
        const fallbackUrl = currentSrc.replace(/sz=\d+/, 'sz=16');
        e.currentTarget.src = fallbackUrl;
    };

    const handleImageLoad = (type: 'main' | 'small') => () => {
        // 이미지 로딩 성공 확인용 (개발 환경에서만)
        if (process.env.NODE_ENV === 'development') {
        console.log(`${type} 이미지 로딩 성공:`, logoUrl);
        }
    };

    return (
        <S.ServiceCardLink href={href} target="_blank" rel="noopener noreferrer">
        <S.ServiceCard>
            <S.HeaderSection>
            {logoUrl && (
                <S.MainLogo 
                src={logoUrl} 
                alt={provider || domain || title}
                onError={handleMainImageError}
                onLoad={handleImageLoad('main')}
                loading="lazy"
                />
            )}
            <S.MenuIcon viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="5" r="1.5" fill="currentColor" />
                <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                <circle cx="12" cy="19" r="1.5" fill="currentColor" />
            </S.MenuIcon>
            </S.HeaderSection>
            <S.ContentSection>
            <S.ServiceTitle>{title}</S.ServiceTitle>
            <S.ServiceDescription>{description}</S.ServiceDescription>
            <S.ProviderSection>
                {logoUrl && (
                <S.SmallLogo 
                    src={logoUrl} 
                    alt={provider || domain}
                    onError={handleSmallImageError}
                    onLoad={handleImageLoad('small')}
                    loading="lazy"
                />
                )}
                {provider && <S.ServiceProvider>{provider}</S.ServiceProvider>}
            </S.ProviderSection>
            </S.ContentSection>
        </S.ServiceCard>
        </S.ServiceCardLink>
    );
};

export default SimilarServiceCard;

