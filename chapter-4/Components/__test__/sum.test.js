import { sum } from "../sum"

test("should give sum of two number",()=>{
const result = sum(2,5);
expect(result).toBe(7)

})