const { app, server } = require("../server.js");
const request = require("supertest");

describe("GET /", () => {
  it("should respond with 'Hello, World!'", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Hello, World!");
  });
});

afterAll(() => {
  server.close();
});
