// import { http, HttpResponse } from 'msw';
// import { MOCK_CREW_LIST } from '@/app/crew/mockData'; 
// import { MOCK_PROJECTS } from '@/app/project/mockData';

// // 블로그 목데이터 추가
// const MOCK_BLOGS = [
//     {
//         id: 'b1',
//         authorId: 'crew_1',
//         title: '[2기] 오픈스택 스터디 - 3주차 블로깅',
//         date: '2025.11.10 13:43',
//         description: '오픈스택은 클라우드 컴퓨팅 플랫폼으로...',
//     },
//     {
//         id: 'b2',
//         authorId: 'crew_1',
//         title: 'Tech Writing 스터디 - docker',
//         date: '2025.11.10 13:43',
//         description: '1. Docker란? 이미지 빌드...',
//     },
//     {
//         id: 'b3',
//         authorId: 'crew_2',
//         title: 'React Query 도입기',
//         date: '2026.01.15 10:00',
//         description: '서버 상태 관리를 위해 React Query를 도입하며 겪은 시행착오입니다.',
//     }
// ];

// export const handlers = [
//     /**
//     * 1. 크루 리스트 조회 API
//     * GET /api/crews
//     */
//     http.get('/api/crews', () => {
//         console.log('MSW: 가로챈 크루 리스트 요청을 처리합니다.');
//         return HttpResponse.json(MOCK_CREW_LIST);
//     }),

//     /**
//     * 2. 프로젝트 리스트 조회 API
//     * GET /api/projects
//     */
//     http.get('/api/projects', () => {
//         console.log('MSW: 가로챈 프로젝트 리스트 요청을 처리합니다.');
//         return HttpResponse.json(MOCK_PROJECTS);
//     }),

//     /**
//     * 3. 특정 크루 상세 정보 조회 (ID 기반)
//     * GET /api/crews/:id
//     */
//     http.get('/api/crews/:id', ({ params }) => {
//         const member = MOCK_CREW_LIST.find((m) => m.id === params.id);
//         return member ? HttpResponse.json(member) : new HttpResponse(null, { status: 404 });
//     }),

//     /**
//     * 4. 특정 크루 블로깅 조회 (ID 기반)
//     * GET /api/crews/:id/blogs
//     */
//     http.get('/api/crews/:id/blogs', ({ params }) => {
//         const { id } = params; // URL에서 크루원 ID를 가져옵니다.
//         console.log(`MSW: ${id} 크루원의 블로그 리스트를 필터링합니다.`);
    
//         // 해당 작성자의 글만 필터링
//         const filteredBlogs = MOCK_BLOGS.filter(blog => blog.authorId === id);
    
//         return HttpResponse.json(filteredBlogs);
//     }),

//     /**
//     * 5. 특정 크루 활동 조회 (ID 기반)
//     * GET /api/crews/:id/projects
//     */
//     http.get('/api/crews/:id/projects', ({ params }) => {
//         const id = params.id as string; // URL에서 크루원 ID를 가져옵니다.
//         console.log(`MSW: ${id} 크루원의 활동 리스트를 필터링합니다.`);
    
//         // 해당 작성자가 참여한 활동만 필터링
//         const filteredProjects = MOCK_PROJECTS.filter(project => project.memberIds.includes(id));
    
//         return HttpResponse.json(filteredProjects);
//     }),

//     http.get('/api/projects/:id', ({ params }) => {
//         const id = params.id as string;
    
//         const project = MOCK_PROJECTS.find((p) => p.id === id);
//         console.dir(project);
//         return HttpResponse.json(project);
//     }),
// ];