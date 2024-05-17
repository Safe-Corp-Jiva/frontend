// Safetest setup file
// Rodrigo Nunez, May 2024
import { setup } from 'safetest/setup'

setup({
  // eslint-disable-next-line no-undef
  bootstrappedAt: require.resolve('./src/app/layout.tsx'),
  ciOptions: {
    usingArtifactsDir: 'artifacts',
  },
})
