import { http, HttpResponse } from 'msw';
import { MOCK_CREW_LIST } from '@/app/crew/mockData'; 
import { MOCK_PROJECTS } from '@/app/project/mockData'; // 프로젝트 목데이터 경로 확인!

export const handlers = [
    /**
     * 1. 크루 리스트 조회 API
     * GET /api/crews
     */
    http.get('/api/crews', () => {
        console.log('MSW: 가로챈 크루 리스트 요청을 처리합니다.');
        return HttpResponse.json(MOCK_CREW_LIST);
    }),

    /**
     * 2. 프로젝트 리스트 조회 API
     * GET /api/projects
     */
    http.get('/api/projects', () => {
        console.log('MSW: 가로챈 프로젝트 리스트 요청을 처리합니다.');
        return HttpResponse.json(MOCK_PROJECTS);
    }),

    /**
     * 3. 특정 크루 상세 정보 조회 (ID 기반)
     * GET /api/crews/:id
     */
    http.get('/api/crews/:id', ({ params }) => {
        const { id } = params;
        const member = MOCK_CREW_LIST.find((m) => m.id === id);

        if (!member) {
        return new HttpResponse(null, { 
            status: 404, 
            statusText: 'Member not found' 
        });
        }

        return HttpResponse.json(member);
    }),
];