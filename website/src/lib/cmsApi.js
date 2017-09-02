export function getViewData(url) {
  return fetch(`http://cms.react-cms-rendering.local${url}`, { headers: new Headers({ 'X-Requested-With': 'XMLHttpRequest' }) })
  .then(response => response.json())
  .then(json => new Promise((resolve, reject) => setTimeout(() => resolve(json), 1500)))
  .catch(e => console.error(e))
}