import { getResource } from "./core"

export const getGenres = async () => {
  return await getResource("/genre/movie/list", {})
}
