import {
  possibleMentorsForModule,
  findMentorForModule,
} from "./1-find-mentors.js";
import { getPeopleOfClass, getActiveClasses } from "./2-class-list.js";
import { test, describe, expect } from "vitest";

describe("testing function possibleMentorsForModule", () => {
  const input = "using-apis";
  const result = possibleMentorsForModule(input);
  const expected = ["Stas", "Andrej", "Yash", "Collin"];

  test("Check if function returns array", () => {
    expect(typeof result).toBe("object");
  });
  test("Check if function returns array of 4 names", () => {
    expect(result.length).toBe(4);
  });
  test("Check if function returns array of names", () => {
    expect(result).toEqual(expected);
  });
});

describe("testing function findMentorForModule", () => {
  const input = "javascript";
  const result = findMentorForModule(input);

  test("Check if function returns string", () => {
    expect(typeof result).toBe("string");
  });
  test("Check if function returns a name", () => {
    expect(result.length).toBeGreaterThan(1);
  });
});

describe("testing function getPeopleOfClass", () => {
  const input = "class34";
  const result = getPeopleOfClass(input);
  const expected = [
    { name: "Rob", role: "student" },
    { name: "Shriyans", role: "mentor" },
  ];

  test("Check if function returns array", () => {
    expect(typeof result).toBe("object");
  });
  test("Check if function returns array of 2 objects", () => {
    expect(result.length).toBe(2);
  });
  test("Check if function returns array of people", () => {
    expect(result).toEqual(expected);
  });
});

describe("testing function getActiveClasses", () => {
  const result = getActiveClasses();

  test("Check if function returns object", () => {
    expect(typeof result).toBe("object");
  });
  test("Check if function does not have params", () => {
    expect(getActiveClasses.length).toBe(0);
  });
});
