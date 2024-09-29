import { describe, it, expect, beforeEach } from "vitest";
import { Deque } from "./Deque";

describe("Deque", () => {
  let deque: Deque<number>;

  beforeEach(() => {
    deque = new Deque<number>();
  });

  it("should initialize with no elements", () => {
    expect(deque.length).toBe(0);
    expect(deque.front).toBeUndefined();
    expect(deque.back).toBeUndefined();
  });

  it("should push elements to the back", () => {
    deque.push_back(1);
    deque.push_back(2);

    expect(deque.length).toBe(2);
    expect(deque.front?.value).toBe(1);
    expect(deque.back?.value).toBe(2);
  });

  it("should push elements to the front", () => {
    deque.push_front(1);
    deque.push_front(2);

    expect(deque.length).toBe(2);
    expect(deque.front?.value).toBe(2);
    expect(deque.back?.value).toBe(1);
  });

  it("should pop elements from the back", () => {
    deque.push_back(1);
    deque.push_back(2);
    const popped = deque.pop_back();

    expect(popped).toBe(2);
    expect(deque.length).toBe(1);
    expect(deque.back?.value).toBe(1);
  });

  it("should pop elements from the front", () => {
    deque.push_back(1);
    deque.push_back(2);
    const popped = deque.pop_front();

    expect(popped).toBe(1);
    expect(deque.length).toBe(1);
    expect(deque.front?.value).toBe(2);
  });

  it("should handle popping from an empty deque", () => {
    const poppedBack = deque.pop_back();
    const poppedFront = deque.pop_front();

    expect(poppedBack).toBeUndefined();
    expect(poppedFront).toBeUndefined();
    expect(deque.length).toBe(0);
  });

  it("should maintain integrity with a mix of push and pop operations", () => {
    deque.push_back(1);
    deque.push_front(2);
    deque.push_back(3);
    deque.push_front(4);

    expect(deque.length).toBe(4);
    expect(deque.front?.value).toBe(4);
    expect(deque.back?.value).toBe(3);

    expect(deque.pop_front()).toBe(4);
    expect(deque.pop_back()).toBe(3);
    expect(deque.length).toBe(2);
    expect(deque.front?.value).toBe(2);
    expect(deque.back?.value).toBe(1);
  });
});
