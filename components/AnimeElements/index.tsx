import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import { CSSProperties } from 'react';

interface BadgeProps {
    text?: string | number;
    iconType?: IconDefinition;
    hasborderRadius?: boolean;
    textColor?: string;
    bgColor?: string;
}

export default function Badge({
    text,
    iconType,
    hasborderRadius = false,
    textColor = '#111111',
    bgColor = 'transparent',
}: BadgeProps) {
    if (!text) return;

    switch (bgColor) {
        case 'pink':
            bgColor = '#ffbade';
            break;
        case 'green':
            bgColor = '#b0e3af';
            break;
        case 'blue':
            bgColor = '#b9e7ff';
            break;
        case 'gray':
            bgColor = '#3a3951';
            break;
    }

    const styles: CSSProperties = {
        backgroundColor: bgColor,
        color: textColor,
        padding: '2px 4px',
        fontSize: '12px',
        lineHeight: '1.2em',
        fontWeight: '700',
        borderRadius: hasborderRadius ? '3px' : '0',
        display: 'inline-flex',
        alignItems: 'center',
        height: '100%',
    };

    const icon = iconType ? (
        <FontAwesomeIcon
            style={{ marginRight: '5px' }}
            width={'auto'}
            height={13}
            icon={iconType}
        />
    ) : null;

    return (
        <span style={styles}>
            {icon}
            {text}
        </span>
    );
}
