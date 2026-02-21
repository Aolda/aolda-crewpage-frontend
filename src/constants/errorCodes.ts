// src/constants/errorCodes.ts
export const ERROR_CODES = {
    INVALID_REQUEST: "ERR_INVALID_REQUEST",         // 400
    ACTIVITY_ACCESS_DENIED: "ERR_ACTIVITY_ACCESS_DENIED", // 403
    USER_NOT_FOUND: "ERR_USER_NOT_FOUND",           // 404
    EXT_REQ_FAILED: "ERR_EXT_REQ_FAILED",           // 503
    DB_REQ_FAILED: "ERR_DB_REQ_FAILED",             // 503
} as const;

export const ERROR_MESSAGES = {
    [ERROR_CODES.INVALID_REQUEST]: "잘못된 요청입니다. 입력값을 확인해 주세요.",
    [ERROR_CODES.ACTIVITY_ACCESS_DENIED]: "비공개 활동이거나 접근 권한이 없는 활동입니다.",
    [ERROR_CODES.USER_NOT_FOUND]: "존재하지 않는 정보를 요청하셨습니다.",
    [ERROR_CODES.EXT_REQ_FAILED]: "서버 외부 저장소 연결에 실패했습니다. 잠시 후 다시 시도해 주세요.",
    [ERROR_CODES.DB_REQ_FAILED]: "데이터베이스 접근 중 오류가 발생했습니다. 서비스 이용에 불편을 드려 죄송합니다.",
};