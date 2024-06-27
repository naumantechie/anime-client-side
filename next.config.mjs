/** @type {import('next').NextConfig} */
import path from 'path';

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(process.cwd(), 'styles')],
    },
    images: {
        remotePatterns: [
            {
                hostname: 'cdn.noitatnemucod.net',
            },
        ],
    },
};

export default nextConfig;
