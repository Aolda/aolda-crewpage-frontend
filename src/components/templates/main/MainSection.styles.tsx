import styled from 'styled-components';

export const SectionWrapper = styled.section<{ $bgColor?: string }>`
    width: 100%;
    padding: 5rem 0;
    background-color: ${(props) => props.$bgColor || '#FFFFFF'};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3.75rem;
    padding: 0 1.25rem;
`;

/* 사용자님이 만드신 Graybar를 Styled Component로 변환 */
export const GrayBar = styled.div`
    width: 3rem;
    height: 0;
    border: solid 0.1875rem #636363;
    margin-bottom: 1.5rem;
`;

export const Label = styled.span`
    display: block;
    font-size: 1rem; /* 16px */
    font-weight: 600;
    color: #6B7280;
    margin-bottom: 0.5rem;
`;

export const Title = styled.h2`
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 1.3;
    color: #111827;
    margin-bottom: 1.5rem;
    word-break: keep-all;

    strong {
        color: #3B82F6;
    }
`;

export const Description = styled.p`
    font-size: 1.125rem;
    line-height: 1.6;
    color: #4B5563;
    max-width: 43.75rem;
    margin: 0 auto;
    word-break: keep-all;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 75rem;
    margin: 0 auto;
`;