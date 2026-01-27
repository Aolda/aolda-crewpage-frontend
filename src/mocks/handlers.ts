import { http, HttpResponse } from 'msw';
import { MOCK_CREW_LIST } from '@/app/crew/mockData';

export const handlers = [
    // 크루 리스트 조회 API 모킹
    http.get('/api/crews', () => {
        return HttpResponse.json(MOCK_CREW_LIST);
    }),

    // 프로젝트 리스트 조회 API 모킹
    // http.get('/api/projects', () => { ... }),
];