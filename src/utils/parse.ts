import type { IdMap } from "@/store"
import { stringify } from "./stringify"

// 分析依赖
export const getImports = (ids: any[], idMap: IdMap) => {
  const importMap = ids.filter(id => typeof id === 'string' && idMap[id]).reduce<Record<string, string | string[]>>((pre, id) => {
    const { importDefault, import: importName, source } = idMap[id].component.importDeclaration
    if (idMap[id] && typeof pre[source] === 'undefined') {
      if (importDefault) {
        pre[source] = importDefault
      } else if (importName) {
        pre[source] = [importName]
      }
    } else if (idMap[id] && pre[source]) {
      if (Array.isArray(pre[source]) && importName) {
        pre[source] = [...new Set(pre[source].concat(importName))]
      }
    }
    return pre
  }, {})

  return Object.entries(importMap).map(([source, importValue]) => {
    if (Array.isArray(importValue)) {
      return `import { ${importValue.join(', ')} } from '${source}';`
    } else {
      return `import ${importValue} from '${source}';`
    }
  }).join(`\n`)
}

const getPropsString = (props: Record<string, any>) => {
  return Object.entries(props).map(([propsKey,propsValue])=>{
    if( typeof propsValue === 'string'){
      // 字符串
      return `${propsKey}='${propsValue}'`
    }else if( typeof propsValue ==='boolean' ||  typeof propsValue ==='number'){
      // 布尔值
      return `${propsKey}={${propsValue}}`
    }else if( Array.isArray(propsValue)){
      // 数组
      return `${propsKey}={${stringify(propsValue)}}`
    }else if(!Array.isArray(propsValue) && typeof propsValue === 'object' ){
      // 对象
      return `${propsKey}={${stringify(propsValue)}}`
    }
  }).join(' ')
}

const getJsx = (ids: any[], idMap: IdMap) => {

  return ids.filter(id => typeof id === 'string' && idMap[id]).map(id => {
    const { component, props } = idMap[id]
    const ele = component.importDeclaration.importDefault || component.importDeclaration.import
    if (props.children) {
      // aa={[]} aa={{}}  aa="" aa={<Comp></Comp>} aa={()=>{}}  aa={} aa
      const filterChildren  = {...props}
     Reflect.deleteProperty(filterChildren,'children')
      return `<${ele} ${getPropsString(filterChildren)} >${props.children}</${ele}>`
    }
    return `<${ele} ${getPropsString(props)} />`
  }).join('\n')
}


export const parse = (ids: string[] | string[][], idMap: IdMap) => {

  return `${getImports(ids, idMap)}

  const Pages = () => {

    return <>
        ${getJsx(ids, idMap)}
    </>
  }

  export default Pages
  `
}
