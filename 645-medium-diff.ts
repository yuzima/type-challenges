/*
  645 - Diff
  -------
  by ZYSzys (@ZYSzys) #medium #object
  
  ### Question
  
  Get an `Object` that is the difference between `O` & `O1`
  
  > View on GitHub: https://tsch.js.org/645
*/

/* _____________ Your Code Here _____________ */

type Diff<O, O1> = {
  [P in keyof O | keyof O1 as P extends keyof O & keyof O1
    ? never
    : P]: P extends keyof O ? O[P] : P extends keyof O1 ? O1[P] : never;
};

type A = Diff<Foo, Bar>;

/* _____________ Test Cases _____________ */
import { Equal, Expect } from "@type-challenges/utils";

type Foo = {
  name: string;
  age: string;
};
type Bar = {
  name: string;
  age: string;
  gender: number;
};

type cases = [Expect<Equal<Diff<Foo, Bar>, { gender: number }>>];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/645/answer
  > View solutions: https://tsch.js.org/645/solutions
  > More Challenges: https://tsch.js.org
*/
