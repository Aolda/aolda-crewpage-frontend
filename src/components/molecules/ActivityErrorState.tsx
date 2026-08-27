'use client';

import React from 'react';
import Link from 'next/link';

interface ActivityErrorStateProps {
    message: string;
    onRetry?: () => void;
}

export default function ActivityErrorState({ message, onRetry }: ActivityErrorStateProps) {
    return (
        <section style={{ minHeight: '60vh', display: 'grid', placeContent: 'center', gap: '1rem', padding: '2rem' }}>
            <h1>활동 정보를 표시할 수 없습니다</h1>
            <p role="alert">{message}</p>
            {onRetry && <button type="button" onClick={onRetry}>다시 시도</button>}
            <Link href="/activity">주요 활동 목록으로</Link>
        </section>
    );
}
