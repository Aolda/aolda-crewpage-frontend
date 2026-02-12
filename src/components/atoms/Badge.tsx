'use client';

import React from "react";
import { StyledBadge } from "./Badge.styles";
import { ProjectStatus } from "@/types/project";

// 배경이 있는 'solid'와 배경이 없는 'outline'으로 구분합니다.
export type BadgeVariant = 'solid' | 'outline' | 'transparent';

export interface BadgeProps {
    children: React.ReactNode;
    variant?: BadgeVariant;
    // 상태값(프로젝트 혹은 멤버)이나 단순 정보(string)를 모두 받을 수 있게 합니다.
    status?: ProjectStatus | boolean; 
}

const Badge: React.FC<BadgeProps> = ({
    children,
    variant = 'solid', // 기본값은 배경 있음
    status,
}) => {
    return (
        <StyledBadge $variant={variant} $status={status}>
            {children}
        </StyledBadge>
    );
};

export default Badge;