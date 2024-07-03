import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

export default function Watch() {
    return (
        <Link href="#" className="btn watch">
            <FontAwesomeIcon icon={faCirclePlay} />
            Watch Now
        </Link>
    );
}
