/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['image.tmdb.org'],
    },
    env: {
        NEXT_PUBLIC_TMDB_ACCESS_TOKEN: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjNlZmFiZDM3NjlhZDkwZTMwY2NhZDAxOWM1NmU3MCIsIm5iZiI6MTczMDgzMTIzMi4xMDA4NzQyLCJzdWIiOiI2NzJhNWZkNjQzM2M4MmVhMjY3ZTczZDMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.gY71QeOmuHpJ8qvB3j-S5pmR041XbX_75SEGYwo3DSM',
    },
};

export default nextConfig;
