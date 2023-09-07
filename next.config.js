/** @type {import('next').NextConfig} */
const nextConfig = {
	images: { unoptimized: true },
	webpack: (config, options) =>
    {
        config.module.rules.push({
            test: /\.pdf$/i,
            type: 'asset/source'
        })

        return config
    },
}  

module.exports = nextConfig
