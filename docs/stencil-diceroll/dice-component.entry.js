import { r as registerInstance, h } from './index-45867a91.js';

const diceComponentCss = "";

const DiceComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.times = 0;
    this.sides = 0;
    this.result = 0;
  }
  componentWillLoad() { }
  /**
   * sides面ダイスをtimes回行う
   * @param times
   * @param sides
   * @return number
   */
  diceroll(times, sides) {
    var result = 0;
    for (let i = 0; i < times; i++) {
      result += Math.floor(Math.random() * (sides - 1)) + 1;
    }
    this.result = result;
  }
  handleTimes(e) {
    this.times = e.target.value;
  }
  handleSides(e) {
    this.sides = e.target.value;
  }
  render() {
    return (h("div", null, h("div", null, "stencil diceroll app"), h("div", null, h("div", null, h("input", { value: this.times, onChange: (event) => this.handleTimes(event) }), h("span", null, "D"), h("input", { value: this.sides, onChange: (event) => this.handleSides(event) })), h("span", null, this.times, " D ", this.sides), h("br", null), h("button", { onClick: () => this.diceroll(this.times, this.sides) }, "diceroll")), this.result !== 0 &&
      h("div", null, "Result: ", this.result)));
  }
};
DiceComponent.style = diceComponentCss;

export { DiceComponent as dice_component };
