import { axiosInstance } from './instance';
import { ActivityListResponse } from '@/types/project';

/**
 * 아올다 전체 활동 목록 조회 (프로젝트 + 스터디)
 */
export const getAllActivities = async (page?: number) => {
    const response = await axiosInstance.get<ActivityListResponse>('/team/activity', {
        params: { page }
    });
    return response.data;
};