import Link from 'next/link';
import Image from 'next/image';

import './index.scss';

export default function Nav() {
    return (
        <header className="header pt-5 pb-5">
            <div className="custom-container">
                <nav className="flex justify-between items-center w-full">
                    <div className="logo-col">
                        <Link href="/">
                            <Image
                                src="/assets/images/logo.png"
                                width="165"
                                height="40"
                                alt="Hianime logo"
                            />
                        </Link>
                    </div>

                    <div className="links-col">
                        <Link className="ms-2 me-2" href="#">
                            Most popular
                        </Link>
                        <Link className="ms-2 me-2" href="#">
                            Movies
                        </Link>
                        <Link className="ms-2 me-2" href="#">
                            TV series
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}
