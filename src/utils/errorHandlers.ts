import { ERROR_CODES, ERROR_MESSAGES } from "@/constants/errorCodes";

// 각 액션별로 필요한 필드를 명확히 정의한 유니온 타입
type ErrorAction = 
    | { type: "REDIRECT"; path: string; message: string }
    | { type: "TOAST"; message: string }
    | { type: "ALERT"; message: string };

// 함수의 반환 타입을 위에서 만든 ErrorAction으로 지정
export const getErrorAction = (errorCode: string): ErrorAction => {
    const message = ERROR_MESSAGES[errorCode as keyof typeof ERROR_MESSAGES] || "알 수 없는 오류가 발생했습니다.";

    switch (errorCode) {
        case ERROR_CODES.USER_NOT_FOUND:
            return { type: "REDIRECT", path: "/404", message };
        case ERROR_CODES.ACTIVITY_ACCESS_DENIED:
            return { type: "REDIRECT", path: "/", message };
        case ERROR_CODES.EXT_REQ_FAILED: // 대응
        case ERROR_CODES.DB_REQ_FAILED:
            return { type: "TOAST", message };
        case ERROR_CODES.INVALID_REQUEST:
            return { type: "ALERT", message };
        default:
            return { type: "TOAST", message };
    }
};