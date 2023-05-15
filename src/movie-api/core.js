const BASE_URL = "https://api.themoviedb.org/3"
const API_KEY = "067511a509b3b027f6785ed944571147"

async function getResource(query, params, options = { method: "GET" }) {
  const url = createURL(query, params)
  const response = await fetch(url, options)

  if (response.ok) {
    return await response.json()
  } else {
    throw new Error("Error with MovieDB API")
  }
}

function createURL(path, params) {
  const url = new URL(BASE_URL + path)

  for (const key of Object.keys(params)) {
    url.searchParams.set(key, params[key])
  }

  url.searchParams.set("api_key", API_KEY)

  return url
}

export { getResource, createURL }
