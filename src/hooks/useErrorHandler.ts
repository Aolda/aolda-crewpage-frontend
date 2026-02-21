import { useRouter } from "next/navigation";
import { getErrorAction } from "@/utils/errorHandlers";
import { useCallback } from "react";

export const useErrorHandler = () => {
    const router = useRouter();

    const handleError = useCallback((errorCode: string) => {
        const action = getErrorAction(errorCode);

        switch (action.type) {
            case "REDIRECT":
                alert(action.message);
                router.push(action.path);
                break;
            case "ALERT":
                alert(action.message);
                break;
            case "TOAST":
                alert(action.message); 
                break;
        }
    }, [router]);

    return { handleError };
};