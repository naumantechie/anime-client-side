import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Badge({
    text,
    iconType,
    hasborderRadius,
    textColor,
    bgColor,
}) {
    switch (bgColor) {
        case 'pink':
            bgColor = '#ffbade';
        case 'green':
            bgColor = '#b0e3af';
        case 'blue':
            bgColor = '#b9e7ff';
        case 'gray':
            bgColor = '#3a3951';
        default:
            bgColor = 'tranperant';
    }

    const styles = {
        backgroundColor: bgColor,
        color: textColor || '#111111',
        padding: '1px 4px',
        fontSize: '12px',
        lineHeight: '1.2em',
        fontWeight: '700',
        borderRadius: hasborderRadius ? '3px' : '0',
    };

    const icon = iconType ? <FontAwesomeIcon icon={iconType} /> : null;

    return (
        <span style={styles}>
            {icon}
            {text}
        </span>
    );
}
