export const primitiveColors = {
    blue: {
        500: '#1A8EE5',
        600: '#1572B8',
    },
    gray: {
        100: '#EFEFEF',
        300: '#A0A0A0',
        500: '#777777',
        700: '#444444',
    },
    white: {
        500: '#FAFAFA',
        600: '#FFFFFF',
    },
    black: {
        500: '#232527',
        600: '#181818',
    },
};

export const semanticColors = {
    brand: {
        primary: 'var(--color-brand-primary)',
        hover: 'var(--color-brand-hover)',
    },
    text: {
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        muted: 'var(--color-text-muted)',
        inverse: 'var(--color-text-inverse)',
        brand: 'var(--color-text-brand)',
    },
    background: {
        page: 'var(--color-bg-page)',
        card: 'var(--color-bg-card)',
        elevated: 'var(--color-bg-elevated)',
    },
    border: {
        default: 'var(--color-border-default)',
        strong: 'var(--color-border-strong)',
        brand: 'var(--color-border-brand)',
    },
};

export const fontFamilies = {
    notoSansKr: 'var(--font-noto-kr), sans-serif',
    cjk: 'var(--font-cjk)',
    paperlogy: 'var(--font-paperlogy)',
    pretendard: 'var(--font-pretendard)',
};

export const textStyles = {
    Display1: {
        fontFamily: fontFamilies.notoSansKr,
        fontSize: '4.5rem',
        fontWeight: 700,
        lineHeight: 1.2,
    },
    Heading1: {
        fontFamily: fontFamilies.notoSansKr,
        fontSize: '3rem',
        fontWeight: 700,
        lineHeight: 1.35,
    },
    Heading2: {
        fontFamily: fontFamilies.notoSansKr,
        fontSize: '2rem',
        fontWeight: 700,
        lineHeight: 1.4,
    },
    Title1: {
        fontFamily: fontFamilies.notoSansKr,
        fontSize: '1.5rem',
        fontWeight: 700,
        lineHeight: 1.4,
    },
    Body1: {
        fontFamily: fontFamilies.notoSansKr,
        fontSize: '1.25rem',
        fontWeight: 400,
        lineHeight: 1.5,
    },
    Body2: {
        fontFamily: fontFamilies.notoSansKr,
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: 1.5,
    },
    Caption1: {
        fontFamily: fontFamilies.notoSansKr,
        fontSize: '0.75rem',
        fontWeight: 400,
        lineHeight: 1.5,
    },
    Caption2: {
        fontFamily: fontFamilies.notoSansKr,
        fontSize: '0.625rem',
        fontWeight: 400,
        lineHeight: 1.5,
    },
    Button1: {
        fontFamily: fontFamilies.notoSansKr,
        fontSize: '1rem',
        fontWeight: 700,
        lineHeight: 1.5,
    },
};

export type TextStyleName = keyof typeof textStyles;

export const typography = (styleName: TextStyleName) => {
    const style = textStyles[styleName];

    return `
        font-family: ${style.fontFamily};
        font-size: ${style.fontSize};
        font-weight: ${style.fontWeight};
        line-height: ${style.lineHeight};
    `;
};

export const spacing = {
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    15: '3.75rem',
};

export const radius = {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    pill: '9999px',
};
