export function getViewData(url) {
  return new Promise((resolve, reject) => {
    console.info('get route data for', url)
    // convert pub url to cms url sub domain
    setTimeout(() => {
      switch (url) {
        case '/':
          return resolve({ route: { name: 'home', pattern: '/', template: 'home' }, content: { foo: 'bar' } })
        case '/foo':
        case '/foo/':
        case '/foo/123':
          return resolve({ route: { name: 'foo', pattern: '/foo/:id?', template: 'foo' }, content: { foo: 'bar' } })
        case '/nested':
        case '/nested/':
          return resolve({
            route: {
              name: 'nested',
              pattern: '/nested',
              template: 'nested'
            },
            content: {
              foo: 'bar',
              routes:
              [
                { name: 'nested1', path: `${url}/nested1/:id` },
                { name: 'nested2', path: `${url}/nested2/:id` }
              ]
            }
          })
        default:
          throw Error('not implemented exception')
      }
    }, 3000)
  })
}