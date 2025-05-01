import { setupServer } from "msw/node";
import { rest } from "msw";

const server = setupServer(
  rest.get("http://127.0.0.1:4000/movies", (req, res, ctx) => {
    return res(
      ctx.json([
        { id: 1, title: "Doctor Strange", time: 115, genres: ["Action", "Fantasy"] },
        { id: 2, title: "The Imitation Game", time: 113, genres: ["Drama", "Biography"] },
      ])
    );
  }),
  rest.get("http://127.0.0.1:4000/directors", (req, res, ctx) => {
    return res(
      ctx.json([
        { name: "Scott Derrickson", movies: ["Doctor Strange"] },
        { name: "Morten Tyldum", movies: ["The Imitation Game"] },
      ])
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());