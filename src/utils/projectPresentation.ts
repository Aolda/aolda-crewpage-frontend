export const DEFAULT_PROJECT_IMAGE = '/images/project/mascot.png';

interface ProjectImages {
    background?: { url?: string | null } | null;
    backgroundImage?: { url?: string | null } | null;
}

/** Both the live API (background) and older fixtures (backgroundImage) are supported. */
export function getProjectImage(project: ProjectImages): string {
    return project.background?.url?.trim()
        || project.backgroundImage?.url?.trim()
        || DEFAULT_PROJECT_IMAGE;
}

/** Project IDs are UUID strings, not numeric route parameters. */
export function parseProjectId(value: string | string[] | undefined): string | null {
    return typeof value === 'string'
        && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(value)
        ? value
        : null;
}

export function projectDetailPath(id: string): string {
    if (!parseProjectId(id)) throw new Error('Invalid project ID');
    return `/team/project/${id}`;
}

export function projectLoadErrorMessage(status?: number): string {
    return status === 404
        ? '활동을 찾을 수 없습니다. 삭제되었거나 공개되지 않은 활동일 수 있습니다.'
        : '활동 정보를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.';
}
