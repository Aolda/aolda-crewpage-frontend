'use client';

import * as S from './LoadingScreen.styles';

interface LoadingScreenProps {
    message?: string;
}

export default function LoadingScreen({ message }: LoadingScreenProps) {
    return (
        <S.Wrapper>
            <S.LogoArea>
                <S.LogoImage src="/images/aoldaIcon.svg" alt="Aolda" />
                <S.LogoText>AOLDA</S.LogoText>
            </S.LogoArea>
            <S.Spinner />
            <S.Dots>
                <S.Dot $delay={0} />
                <S.Dot $delay={0.2} />
                <S.Dot $delay={0.4} />
            </S.Dots>
            {message && <S.Message>{message}</S.Message>}
        </S.Wrapper>
    );
}
