'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { isAxiosError } from 'axios';
import { getProjectDetail } from '@/api/project';

import { ProjectDetailResponse } from '@/types/project';
import ProjectDetailPageTemplate from '@/components/templates/ProjectDetail/ProjectDetailPageTemplate';
import LoadingScreen from '@/components/atoms/LoadingScreen';
import ActivityErrorState from '@/components/molecules/ActivityErrorState';
import { parseProjectId, projectLoadErrorMessage } from '@/utils/projectPresentation';

export default function ProjectPage() {
    const params = useParams();
    const activityId = parseProjectId(params.id);
    const [attempt, setAttempt] = useState(0);
    const [result, setResult] = useState<{
        id: string;
        attempt: number;
        project?: ProjectDetailResponse;
        error?: string;
    } | null>(null);

    useEffect(() => {
        if (!activityId) return;
        let active = true;

        getProjectDetail(activityId).then(
            (project) => {
                if (active) setResult({ id: activityId, attempt, project });
            },
            (error: unknown) => {
                if (active) setResult({
                    id: activityId,
                    attempt,
                    error: projectLoadErrorMessage(isAxiosError(error) ? error.response?.status : undefined),
                });
            },
        );

        // Ignore stale responses after navigation or a retry.
        return () => { active = false; };
    }, [activityId, attempt]);

    if (!activityId) {
        return <ActivityErrorState message="올바르지 않은 활동 주소입니다. 목록에서 활동을 다시 선택해 주세요." />;
    }
    if (result?.id !== activityId || result.attempt !== attempt) return <LoadingScreen />;
    if (result.error || !result.project) {
        return <ActivityErrorState message={result.error || projectLoadErrorMessage()} onRetry={() => setAttempt(value => value + 1)} />;
    }

    return <ProjectDetailPageTemplate project={result.project} />;
}
