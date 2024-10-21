/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
          {
            source: '/(.*)',
            headers: [
              {
                key: 'Content-Security-Policy',
                value: "default-src 'self'; frame-src 'self' https://*.jeremiahgage.me https://*.jeremiah.dev https://dateinyourcircle.com https://ozarkhighlandshepherds.com;"
              },
            ],
          },
        ];
    },
};

export default nextConfig;
