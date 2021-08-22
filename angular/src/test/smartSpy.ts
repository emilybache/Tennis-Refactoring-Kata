// @ts-ignore
export function smartSpyOn(object: any, method: any): jasmine.Spy<any> {
  const dynamicNameThatMakesJasmineHappy = method.name as never;
  // @ts-ignore
  return spyOn(object, dynamicNameThatMakesJasmineHappy);
}
