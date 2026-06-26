import { describe, it } from "node:test";
import assert from "node:assert/strict";

import { sum } from "../src/sum.js";

describe("sum", () => {
  it("adds two numbers", () => {
    assert.equal(sum(2, 3), 5);
  });

  it("handles negative numbers", () => {
    assert.equal(sum(-2, 3), 1);
  });
});
