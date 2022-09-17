import type { RenderProps } from "@/components/Render";

function translateProps(props = {}) {
  const res = Object.keys(props).map(key => {
    if (props[key] !== '') {
      return `${key}="${props[key]}"`
    } else {
      return `${key}`
    }
  }).join(' ')
  if (res) return ` ${res}`
  return ''
}

function createElement(name: string) {
  return `${name.replace('Ant', '')}`
}

export const parse = (schema: RenderProps['schema']) => {
  const deps = [{ import: [], from: '' }];

  return `
  ${deps.map(dep => {
    return `import ${Array.isArray(dep.import) ? `{ ${dep.import.join(',')} }` : `${dep.import}`} from ${dep.import} `
  }).join(`
  `)}

  const Pages = ()=>{

    return ${
      schema.map()
    }
  }

  exort default Pages
  `
}

export const createCode = (xml: string, fileName: string) => {
  if ('download' in document.createElement('a')) {
    const eleLink = document.createElement('a');
    eleLink.download = `${fileName}.tsx`;
    const blob = new Blob([(xml)])
    eleLink.href = URL.createObjectURL(blob)

    document.body.appendChild(eleLink)
    eleLink.click()
    document.body.removeChild(eleLink)
  }
}
