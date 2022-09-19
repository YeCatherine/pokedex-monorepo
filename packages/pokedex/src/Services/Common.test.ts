import { getIdFromURL } from "./Common";

describe("check getIdFromUrlFunction", () => {
  test("Get ID", () => {
    const number = getIdFromURL("https://site.com/1/");
    expect(number).toBe(1);
  });

  test("Get id of regular URL", () => {
    const number = getIdFromURL("https://site.com/test/9/");
    expect(number).toBe(9);
  });
});
