// one method, simple organization

// 3 branches, 3 tests.

import {StrengthPipe} from "./strength.pipe";
describe('strength pipe', ()=> {

  // utilize titles to have meaning on what is breaking.
  // self documenting is ideal.
  it ('should say weak when strength is less than 10', ()=> {
    // what tests to write? numbers: negatives, 0, testing #s on the boundary.
    // test weak
    // test strong
    // test unbelievable.
    let pipe = new StrengthPipe();
    // if first expectation fails, you could not see others successes you see error
    // these are four logical different tests.
    // even break out simple separate tests because code becomes complex.
    // want one test per problem to fail.
    expect(pipe.transform(9)).toEqual('9 (weak)');
    expect(pipe.transform(5)).toEqual('5 (weak)');
    expect(pipe.transform(0)).toEqual('0 (weak)');
    expect(pipe.transform(-1)).toEqual('-1 (weak)');
    // nesting describes is an option, here.

    // testing one thing with two expectations is okay.
    // write a matcher for a group if it takes a group to prove something.
      // use a 'matcher'...
    // utilize docs.  https://jasmine.github.io/api/2.7/matchers.html
    // toDo: look into this....anti pattern to use non-deterministic things like rand() or new Date()
      // JE says yes.  don't use non deterministic.  come up with test data yourself.  that includes things that might
      // make it fail.  we are trying to make the tests fail.



  });

  // hw write tests to cover the other two cases.


});
