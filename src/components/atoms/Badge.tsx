'use client';

import React from "react"
import { StyledBadge } from "./Badge.styles"
import { type BadgeTheme } from "@/types/Types";

/*
* 카드에 뱃지처럼 붙여서 상태를 표현하는 컴포넌트
* @params {BadgeTheme} theme
*/

export interface BadgeProps {
    children: React.ReactNode,
	$theme: BadgeTheme,
}


const Badge: React.FC<BadgeProps> = ({
    children,
	$theme,
}) => {
	return (
        <StyledBadge $theme={$theme}>
            {children}
        </StyledBadge>
    );
};

export default Badge;