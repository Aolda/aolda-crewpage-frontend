'use client';

import Image from 'next/image';
import { useState } from 'react';

const DEFAULT_PROFILE_IMAGE = '/images/CrewImg.png';

interface ProfileImageProps {
    src?: string;
    alt: string;
    width: number;
    height: number;
}

const ProfileImage = ({ src, alt, width, height }: ProfileImageProps) => {
    const [imageSrc, setImageSrc] = useState(src || DEFAULT_PROFILE_IMAGE);

    return (
        <Image
            src={imageSrc}
            alt={alt}
            width={width}
            height={height}
            onError={() => setImageSrc(DEFAULT_PROFILE_IMAGE)}
        />
    );
};

export default ProfileImage;
