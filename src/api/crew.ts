import { axiosInstance } from './instance';
import { CrewListResponse, CrewDetailResponse } from '@/types/crew';

export interface CrewQueryParams {
    generation?: number;
    role?: string;
    univDepartment?: string;
    page?: number;
}

/**
 * 크루 목록 조회 (AMMS 연계)
 * @param params 검색 필터 및 페이지 번호
 */
export const getCrewList = async (params?: CrewQueryParams) => {
    // 쿼리 파라미터가 없으면 전체 목록, 있으면 페이지네이션 적용
    const response = await axiosInstance.get<CrewListResponse>('/crew', {
        params,
    });
    return response.data;
};

/**
 * 크루 상세 정보 조회 (AMMS 연계)
 * @param id 크루 고유 ID (crewId)
 */
export const getCrewDetail = async (id: string | number) => {
    const response = await axiosInstance.get<CrewDetailResponse>(`/crew/${id}`);
    return response.data;
};