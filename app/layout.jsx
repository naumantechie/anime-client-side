import { Poppins } from 'next/font/google';
import '@styles/globals.css';
import Nav from '@components/Nav/index';

export const metadata = {
    title: 'HiAnime Free Anime Streaming ',
    description:
        'Watch your favorite anime online in Dub or Sub format without registration on HiAnime.to fastest Streaming server NOW.',
};

const poppins = Poppins({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
});

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <header>
                    <Nav />
                </header>
                <main>{children}</main>
            </body>
        </html>
    );
}
