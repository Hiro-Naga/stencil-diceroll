export declare class DiceComponent {
  times: number;
  sides: number;
  result: number;
  componentWillLoad(): void;
  /**
   * sides面ダイスをtimes回行う
   * @param times
   * @param sides
   * @return number
   */
  diceroll(times: number, sides: number): void;
  handleTimes(e: any): void;
  handleSides(e: any): void;
  render(): any;
}
