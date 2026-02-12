import { axiosInstance } from './instance';
import { ProjectListResponse, ProjectDetailResponse } from '@/types/project';

/**
 * 프로젝트 전체 정보 조회
 */
export const getProjectList = async () => {
    const response = await axiosInstance.get<ProjectListResponse>('/project');
    return response.data;
};

/**
 * 프로젝트 상세 정보 조회 (AMMS 연계)
 * @param id 프로젝트 고유 ID (activityId)
 */
export const getProjectDetail = async (id: string | number) => {
    const response = await axiosInstance.get<ProjectDetailResponse>(`/project/${id}`);
    return response.data;
};