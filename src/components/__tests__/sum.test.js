import { sum } from "../../utils/sum";


it("sum of the two numbers calculated" , ()=>{
  const result = sum(3,4);
  expect(result).toBe(7);
})
