import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createStyleImportPlugin, AntdResolve } from 'vite-plugin-style-import';
import Unocss from 'unocss/vite'
import {presetWind} from 'unocss'
// https://vitejs.dev/config/
export default defineConfig({
  base:'/antd-one-editor',
  plugins: [
    createStyleImportPlugin({ resolves: [AntdResolve()] }),
    Unocss({
      presets:[
        presetWind()
      ],
      theme:{
        colors:{
          brand:{
            'dark':'#222325',
            'darkContent':'#151517'
          }
        }
      }
    }),
    react(),
  ],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          // 'primary-color': 'red',
          // 'link-color': '#1DA57A',
          // 'border-radius-base': '2px',
        },
        // 支持内联 javascript
        javascriptEnabled: true,
      },
    }
  }
})
