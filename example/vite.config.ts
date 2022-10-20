import react from '@vitejs/plugin-react'
import path from 'node:path'

export default {
  plugins: [react()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, '../src'),
    },
  },
}
