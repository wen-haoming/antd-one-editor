import type { IdMap } from "@/store"

export const getImports = (ids: any[], idMap: IdMap) => {
    
  const importMap = ids.filter(id => typeof id === 'string').reduce<Record<string, string | string[]>>((pre, id) => {
    const { importDefault, import: importName, source } = idMap[id].component.importDeclaration
    if (idMap[id] && typeof pre[source] === 'undefined') {
      if (importDefault) {
        pre[source] = importDefault
      } else if (importName) {
        pre[source] = [importName]
      }
    } else if (idMap[id] && pre[source]) {
      console.log(importName,'importName');
      if (Array.isArray(pre[source]) && importName) {
        pre[source] = [...new Set( pre[source].concat(importName))]
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


export const parse = (ids: string[] | string[][], idMap: IdMap) => {

  return `
  ${getImports(ids, idMap)}

  const Pages = () => {

    return 
  }

  export default Pages
  `
}