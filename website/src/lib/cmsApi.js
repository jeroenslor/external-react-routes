export function getViewData(url) {
  return fetch(`http://cms.react-cms-rendering.local${url}`, { headers: new Headers({ 'X-Requested-With': 'XMLHttpRequest' }) })
  .then(response => response.json())
  .catch(e => console.error(e))
}