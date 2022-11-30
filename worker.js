export const api = {
  icon: '🚀',
  name: 'screaming.snake.case.do',
  description: 'SCREAMING_SNAKE_CASE_KEYS Transformation API',
  url: 'https://screaming.snake.case.do/api',
  type: 'https://apis.do/transformation',
  endpoints: {
    listCategories: 'https://screaming.snake.case.do/api',
    getCategory: 'https://screaming.snake.case.do/:type',
  },
  site: 'https://screaming.snake.case.do',
  login: 'https://screaming.snake.case.do/login',
  signup: 'https://screaming.snake.case.do/signup',
  subscribe: 'https://screaming.snake.case.do/subscribe',
  repo: 'https://github.com/drivly/screaming.snake.case.do',
}

export const gettingStarted = [
  `If you don't already have a JSON Viewer Browser Extension, get that first:`,
  `https://extensions.do`,
]

export const examples = {
  listItems: 'https://screaming.snake.case.do/worker',
}

export default {
  fetch: async (req, env) => {
    const { user, hostname, pathname, rootPath, pathSegments, query } = await env.CTX.fetch(req).then(res => res.json())
    if (rootPath) return json({ api, gettingStarted, examples, user })
    
    // TODO: Implement this
    const [ resource, id ] = pathSegments
    const data = { resource, id, hello: user.city }
    
    return json({ api, data, user })
  }
}

const json = obj => new Response(JSON.stringify(obj, null, 2), { headers: { 'content-type': 'application/json; charset=utf-8' }})
