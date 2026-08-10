import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'NexaWorks',
    short_name: 'NexaWorks',
    description: 'Enterprise Context Reconstruction Platform',
    start_url: '/',
    display: 'standalone',
    background_color: '#0d0d0d',
    theme_color: '#533afd',
    icons: [
      {
        src: '/logo.jpg',
        sizes: '192x192',
        type: 'image/jpeg',
      },
      {
        src: '/logo.jpg',
        sizes: '512x512',
        type: 'image/jpeg',
      },
    ],
  };
}
