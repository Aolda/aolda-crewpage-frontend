import { axiosInstance } from './instance';
import { ProjectListResponse, ProjectDetailResponse } from '@/types/project';
import { projectDetailPath } from '@/utils/projectPresentation';

/**
 * 프로젝트 전체 정보 조회
 */
export const getProjectList = async () => {
    const response = await axiosInstance.get<ProjectListResponse>('/team/project');
    return response.data;
};

/**
 * 프로젝트 상세 정보 조회 (AMMS 연계)
 * @param id 프로젝트 고유 ID (activityId)
 */
export const getProjectDetail = async (id: string) => {
    const response = await axiosInstance.get<ProjectDetailResponse>(projectDetailPath(id));
    return response.data;
};
