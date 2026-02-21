import { useRouter } from "next/navigation";
import { getErrorAction } from "@/utils/errorHandlers";

export const useErrorHandler = () => {
    const router = useRouter();

    const handleError = (errorCode: string) => {
        const action = getErrorAction(errorCode);

        switch (action.type) {
            case "REDIRECT":
                alert(action.message); // 사용자에게 알림 후 이동
                router.push(action.path);
                break;
            case "ALERT":
                alert(action.message);
                break;
            case "TOAST":
                // 프로젝트에 구현된 Toast 시스템이 있다면 호출 (없다면 임시 alert)
                console.error(`[Toast Error] ${action.message}`);
                alert(action.message); 
                break;
        }
    };

    return { handleError };
};