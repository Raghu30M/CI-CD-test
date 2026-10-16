const test = require("node:test");
const assert = require("node:assert/strict");
const request = require("supertest");
const app = require("../src/app");

test("GET / returns the welcome message", async () => {
  const response = await request(app).get("/");

  assert.equal(response.status, 200);
  assert.equal(response.body.message, "Hello from Node.js CI/CD!");
  assert.equal(response.body.status, "running");
});

test("GET /health returns a healthy status", async () => {
  const response = await request(app).get("/health");

  assert.equal(response.status, 200);
  assert.deepEqual(response.body, { status: "healthy" });
});