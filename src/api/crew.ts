import { axiosInstance } from './instance';
import { CrewListResponse, CrewDetailResponse, DepartmentMap, DepartmentResponse } from '@/types/crew';

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
    const response = await axiosInstance.get<CrewListResponse>('/team/crew', {
        params,
    });
    return response.data;
};

/**
 * 크루 상세 정보 조회 (AMMS 연계)
 * @param id 크루 고유 ID (crewId)
 */
export const getCrewDetail = async (id: string | number) => {
    const response = await axiosInstance.get<CrewDetailResponse>(`/team/crew/${id}`);
    return response.data;
};

/**
 * 크루 부서 key-value 목록 조회
 * 반환: { "DEPARTMENT_TYPE/DEV": "개발팀", ... }
 */
export const getDepartmentList = async (): Promise<DepartmentMap> => {
    const response = await axiosInstance.get<DepartmentResponse>('/team/department');
    return response.data.data;
};