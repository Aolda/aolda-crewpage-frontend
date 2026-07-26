'use client';

import Image from 'next/image';
import { CSSProperties, useState } from 'react';

const DEFAULT_PROFILE_IMAGE = '/images/CrewImg.png';

interface ProfileImageProps {
    src?: string;
    alt: string;
    width?: number;
    height?: number;
    fill?: boolean;
    style?: CSSProperties;
}

const ProfileImage = ({ src, alt, width, height, fill, style }: ProfileImageProps) => {
    const [imageSrc, setImageSrc] = useState(src || DEFAULT_PROFILE_IMAGE);

    return (
        <Image
            src={imageSrc}
            alt={alt}
            width={fill ? undefined : width}
            height={fill ? undefined : height}
            fill={fill}
            style={style}
            onError={() => setImageSrc(DEFAULT_PROFILE_IMAGE)}
        />
    );
};

export default ProfileImage;
