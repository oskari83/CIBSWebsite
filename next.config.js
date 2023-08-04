/** @type {import('next').NextConfig} */
const nextConfig = {
	// Optional: Add a trailing slash to all paths `/about` -> `/about/`
	trailingSlash: true,
	//Optional: Change the output directory `out` -> `dist`
	distDir: 'dist',
	crossOrigin: 'anonymous',
	images: { unoptimized: true },
}  

module.exports = nextConfig
