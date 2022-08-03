// import { CRITICAL, FUMBLE } from "../types/constants";

// export class DicerollService {

//   /**
//    * sides面ダイスをtimes回行う
//    * @param times 
//    * @param sides 
//    * @return number
//    */
//   public diceroll(times: number, sides: number): number {
//     var result = 0;
//     for (let i = 0; i < times; i++) {
//       result += Math.floor(Math.random() * (sides - 1)) + 1;
//     }
//     return result;
//   }

//   /**
//    * Coll of Cthulhu Battle(6版)
//    * @param expected
//    * @return string
//    */
//   public ccb(expected: number): string {
//     var result = this.diceroll(1, 100);
//     if (result > expected) {
//       if (result >= FUMBLE) {
//         return `1d100->${result}: 致命的失敗`;
//       }
//       return `1d100->${result}: 失敗`;
//     }
//     if (result <= CRITICAL) {
//       return `1d100->${result}: 決定的成功`;
//     }
//     return `1d100->${result}: 成功`;
//   }

//   /**
//    * 2d6
//    * @return number
//    */
//   public dd(): number {
//     return this.diceroll(2, 6);
//   }
// }