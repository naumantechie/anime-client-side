import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

interface DetailsProps {
    animeID: string;
}

export default function Watch({ animeID }: DetailsProps) {
    return (
        <Link href={`/${animeID}`} className="btn details">
            Details
            <FontAwesomeIcon icon={faAngleRight} />
        </Link>
    );
}
