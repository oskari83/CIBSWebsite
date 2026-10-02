/** @type {import('next').NextConfig} */
const nextConfig = {
	images: { unoptimized: true },
	eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
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
