import { expect, it } from "vitest";

export const getName = (first: string, last?: string) => {
  if (last) {
    return `${first} ${last}`;
  }
  return first;
};

// string[], shows it is an array of strings. So when we want to spread out our array of other args, this is how we do it, say what types are in the array
// export const getName = (first: string, ...otherNames: string[]) => {
//   if (otherNames[0]) {
//     return `${first} ${otherNames[0]}`;
//   }
//   return first;
// };

it("Should work with just the first name", () => {
  const name = getName("Matt");

  expect(name).toEqual("Matt");
});

it("Should work with the first and last name", () => {
  const name = getName("Matt", "Pocock");

  expect(name).toEqual("Matt Pocock");
});
