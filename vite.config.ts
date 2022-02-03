import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';
import svgrPlugin from 'vite-plugin-svgr';

export default {
  base: `/portfolio/`,
  plugins: [
    svgrPlugin({
      svgrOptions: {
        icon: true,
        // ...svgr options (https://react-svgr.com/docs/options/)
      },
    }),
  ],
};
