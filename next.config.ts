const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
      { protocol: 'http', hostname: '**' },
    ],
  },
  // HAPUS ATAU KOMENTARI BARIS DI BAWAH INI:
  // outputFileTracingRoot: path.resolve(__dirname, '../../'), 
  
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  // ... sisa kode lainnya
};
