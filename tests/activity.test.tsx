import assert from 'node:assert/strict';
import { test } from 'node:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import ProjectBlock from '../src/components/organisms/ProjectBlock';
import ProjectDetailPageTemplate from '../src/components/templates/ProjectDetail/ProjectDetailPageTemplate';
import ActivityErrorState from '../src/components/molecules/ActivityErrorState';
import { getProjectDetail } from '../src/api/project';
import { axiosInstance } from '../src/api/instance';
import { AxiosError } from 'axios';
import { ServerStyleSheet } from 'styled-components';
import Badge from '../src/components/atoms/Badge';
import Activity from '../src/components/templates/main/Activity/Activity';
import { GrayBar } from '../src/components/templates/main/MainSection/MainSection.styles';
import { MOCK_ACTIVITY_RESPONSE } from '../src/mocks/activityData';
import { ACTIVITY_STATUS } from '../src/types/project';
import { colors } from '../src/styles/theme';
import { radius } from '../src/styles/tokens';
import type { ProjectDetailResponse, ProjectSummary } from '../src/types/project';
import {
    DEFAULT_PROJECT_IMAGE, getProjectImage, parseProjectId, projectDetailPath, projectLoadErrorMessage,
} from '../src/utils/projectPresentation';

const id = '00000000-0000-4000-8000-000000000101';
const summary: ProjectSummary = {
    activityId: id,
    activityNames: { ko: '테스트 활동', en: 'Test Activity', brief: null },
    background: { url: '', color: '#000000' },
    status: 'ACTIVITY_STATUS/ONBOARDING',
    startedAt: '2026-1',
    participantsCount: 0,
};
const detail: ProjectDetailResponse = {
    activityNames: summary.activityNames,
    background: summary.background,
    contents: {
        ideaBackground: '실제 API 형태의 활동 설명',
        activityInfo: { startedAt: ['2026-1'], projectType: 'PROJECT_TYPE/IN_HOUSE', activityCounts: 0, bloggingCounts: 0 },
        mainBloggings: [],
    },
    participants: [],
    gallery: [],
};

test('canonical and backend legacy recruiting statuses keep their label and badge color', () => {
    assert.equal(ACTIVITY_STATUS['ACTIVITY_STATUS/PREPARING'], '준비중');
    for (const status of ['ACTIVITY_STATUS/RECRUITING', 'ACTIVITY_STATUS/RECRIUTING'] as const) {
        const sheet = new ServerStyleSheet();
        try {
            const html = renderToStaticMarkup(sheet.collectStyles(<Badge status={status}>{ACTIVITY_STATUS[status]}</Badge>));
            assert.match(html, /모집중/);
            assert.ok(sheet.getStyleTags().includes(`background-color:${colors.primary500}`));
        } finally {
            sheet.seal();
        }
    }
});

test('homepage activity supports API brief names and legacy fixtures without brief names', () => {
    const fixture = MOCK_ACTIVITY_RESPONSE.data[0];
    const html = renderToStaticMarkup(<Activity activities={[
        fixture,
        { ...fixture, activityNames: { ko: '두 번째 활동', en: 'Second Activity', brief: '약칭 테스트' } },
    ]} />);
    assert.ok(html.includes(fixture.activityNames.ko));
    assert.match(html, /약칭 테스트/);
    for (const activity of MOCK_ACTIVITY_RESPONSE.data) {
        assert.equal(typeof activity.background.url, 'string');
        assert.ok(ACTIVITY_STATUS[activity.status]);
    }
});

test('homepage section divider uses a defined radius token', () => {
    const sheet = new ServerStyleSheet();
    try {
        renderToStaticMarkup(sheet.collectStyles(<GrayBar />));
        assert.ok(sheet.getStyleTags().includes(`border-radius:${radius.sm}`));
    } finally {
        sheet.seal();
    }
});

test('UUID route IDs remain strings all the way to the detail endpoint', () => {
    assert.equal(parseProjectId(id), id);
    assert.equal(projectDetailPath(id), `/team/project/${id}`);
    assert.equal(parseProjectId(id.toUpperCase()), id.toUpperCase());
});

test('detail API requests the UUID endpoint and returns its response, not mock content', async () => {
    const originalAdapter = axiosInstance.defaults.adapter;
    try {
        axiosInstance.defaults.adapter = async (config) => {
            assert.equal(config.method, 'get');
            assert.equal(config.url, `/team/project/${id}`);
            return { data: detail, status: 200, statusText: 'OK', headers: {}, config };
        };
        assert.deepEqual(await getProjectDetail(id), detail);
    } finally {
        axiosInstance.defaults.adapter = originalAdapter;
    }
});

test('detail API preserves 404 errors for the page error state', async () => {
    const originalAdapter = axiosInstance.defaults.adapter;
    try {
        axiosInstance.defaults.adapter = async (config) => {
            throw new AxiosError('Not found', 'ERR_BAD_REQUEST', config, undefined, {
                data: {}, status: 404, statusText: 'Not Found', headers: {}, config,
            });
        };
        await assert.rejects(getProjectDetail(id), (error: unknown) =>
            error instanceof AxiosError && error.response?.status === 404);
    } finally {
        axiosInstance.defaults.adapter = originalAdapter;
    }
});

test('malformed, absent and array parameters are rejected before fetching', () => {
    for (const value of [undefined, '', 'NaN', '101', 'not-an-id', `${id}/extra`, [id]]) {
        assert.equal(parseProjectId(value), null);
    }
    assert.throws(() => projectDetailPath('not-an-id'), /Invalid project ID/);
});

test('missing/empty image objects use an existing local placeholder', () => {
    for (const images of [{}, { background: null }, { background: { url: '' } },
        { background: { url: '  ' }, backgroundImage: { url: null } }]) {
        assert.equal(getProjectImage(images), DEFAULT_PROJECT_IMAGE);
    }
});

test('live and legacy image URLs are retained with live URL taking priority', () => {
    assert.equal(getProjectImage({ background: { url: '/live.png' }, backgroundImage: { url: '/old.png' } }), '/live.png');
    assert.equal(getProjectImage({ background: { url: '' }, backgroundImage: { url: '/old.png' } }), '/old.png');
});

test('list card renders the production shape with no backgroundImage field', () => {
    const html = renderToStaticMarkup(<ProjectBlock project={summary} />);
    assert.match(html, /Test Activity/);
    assert.ok(html.includes(encodeURIComponent(DEFAULT_PROJECT_IMAGE)));
});

test('detail renders without legacy image or abbreviated title and with empty collections', () => {
    const html = renderToStaticMarkup(<ProjectDetailPageTemplate project={detail} />);
    assert.match(html, /<h1>Test Activity<\/h1>/);
    assert.match(html, /실제 API 형태의 활동 설명/);
    assert.ok(html.includes(encodeURIComponent(DEFAULT_PROJECT_IMAGE)));
});

test('404 and network/server failures have visible guidance, retry and a way back', () => {
    assert.match(projectLoadErrorMessage(404), /찾을 수 없습니다/);
    for (const status of [undefined, 500, 503]) {
        const html = renderToStaticMarkup(<ActivityErrorState message={projectLoadErrorMessage(status)} onRetry={() => {}} />);
        assert.match(html, /role="alert"/);
        assert.match(html, /다시 시도/);
        assert.match(html, /href="\/activity"/);
    }
    const invalid = renderToStaticMarkup(<ActivityErrorState message="올바르지 않은 활동 주소입니다." />);
    assert.doesNotMatch(invalid, /<button/);
});
