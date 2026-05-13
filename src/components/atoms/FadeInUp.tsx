'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, ReactNode } from 'react';

interface FadeInUpProps {
    children: ReactNode;
    delay?: number;
}

/**
 * 모바일에서만 스크롤 시 아래에서 위로 페이드인되는 래퍼 컴포넌트.
 * 데스크탑/태블릿에서는 children을 그대로 렌더링합니다.
 */
export default function FadeInUp({ children, delay = 0 }: FadeInUpProps) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia('(max-width: 743px)');
        const check = () => setIsMobile(mq.matches);
        check();
        mq.addEventListener('change', check);
        return () => mq.removeEventListener('change', check);
    }, []);

    if (!isMobile) return <>{children}</>;

    return (
        <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: 'easeOut', delay }}
            style={{ width: '100%' }}
        >
            {children}
        </motion.div>
    );
}
