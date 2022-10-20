import react from '@vitejs/plugin-react'
import * as path from 'node:path'
import { visualizer as PluginVisualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode === 'development'

  return {
    plugins: [react(), PluginVisualizer()],
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },

    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/index.ts'),
        // formats: ['es'],
        name: 'admin-ui',
      },
      sourcemap: !isDev,
      minify: !isDev,
      rollupOptions: {
        treeshake: !isDev,
        external: ['react', 'react-dom', '@uvodohq/planum'],
        output: {
          // Provide global variables to use in UMD build for externalized deps
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            '@uvodohq/planum': 'Planum',
          },
        },
      },
    },
  }
})
