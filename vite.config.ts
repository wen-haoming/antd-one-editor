import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createStyleImportPlugin, AntdResolve } from 'vite-plugin-style-import';
import Unocss from 'unocss/vite'
import {presetWind} from 'unocss'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/antd-one-editor/',
  resolve:{
    alias:{
      '@': resolve(__dirname,'./src')
    }
  },
  plugins: [
    createStyleImportPlugin({ resolves: [AntdResolve()] }),
    Unocss({
      presets:[
        presetWind()
      ],
      shortcuts: {
        'btn': 'inline-block py-1	 px-3 font-semibold rounded-md bg-brand-primary text-white cursor-pointer hover:bg-brand-hover text-center',
        'compBtn': 'inline-block py-3	 px-3	text-brand-primary font-semibold rounded-md text-brand-txt  cursor-pointer hover:bg-brand-line hover:text-brand-primary text-left',
        'btn-block':'block py-1	 px-3	font-semibold rounded-md bg-brand-primary text-white cursor-pointer hover:bg-brand-hover text-center',
        // 'hover-outline':'hover:outline  hover:outline-red'
      },
      rules:[
        ['hhh',{
          outline:'1.5px dotted #2558fb',
          // 'outline-width': "1px",
          //   'outline-style':'dotted',
          // outlineStyle:'dashed',
          'outline-offset':'1px'
        }]
      ],
      theme:{
        colors:{
          brand:{
            'primary':'#2558fb',
            'hover':'#507ff7',
            'line':'#e1e2e8',
            'txt':'#1e2128',
            'subTxt':'#505968'
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
          // 'link-color': '#1DA57A',
          // 'border-radius-base': '2px',
        },
        // 支持内联 javascript
        javascriptEnabled: true,
      },
    }
  }
})
