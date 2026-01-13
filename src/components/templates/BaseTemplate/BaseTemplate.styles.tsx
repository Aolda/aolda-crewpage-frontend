import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
`;

export const MainContent = styled.main`
    flex: 1;
    /* 네비게이션 바(72px) + 상단 여백(40px) + 알파 = 약 150px(9.375rem) */
    padding-top: 9.375rem; 
    width: 100%;
`;