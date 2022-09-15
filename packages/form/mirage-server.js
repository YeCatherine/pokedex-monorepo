import { createServer, Response } from "miragejs"

createServer({
  routes() {
    this.namespace = "api"

    // Responding to a POST request
    this.post("/movies", (schema, request) => {
      let attrs = JSON.parse(request.requestBody)
      attrs.id = Math.floor(Math.random() * 100)

      return { movie: attrs }
    })

    // Using the `timing` option to slow down the response
    this.get(
      "/movies",
      () => {
        return {
          movies: [
            { id: 1, name: "Inception", year: 2010 },
            { id: 2, name: "Interstellar", year: 2014 },
            { id: 3, name: "Dunkirk", year: 2017 },
          ],
        }
      },
      { timing: 4000 }
    )

    // Using the `Response` class to return a 500
    this.delete("/movies/1", () => {
      let headers = {}
      let data = { errors: ["Server did not respond"] }

      return new Response(500, headers, data)
    })
  },
})
