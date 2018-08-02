describe('my first test', ()=> {

  let myObj;

  beforeEach(()=> {
    myObj = { val1: 5 };
  });

  it('works', () => {
    myObj.val1 = 6
    expect(myObj.val1).toEqual(6);
  });

  it('works again', () => {
    expect(myObj.val1).toEqual(5);
  });

})
