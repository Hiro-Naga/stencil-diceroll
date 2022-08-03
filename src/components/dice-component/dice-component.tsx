import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: 'dice-component',
  styleUrl: 'dice-component.css',
  shadow: true,
})
export class DiceComponent {
  @Prop() times: number = 0;
  @Prop() sides: number = 0;
  @Prop() result: number = 0;

  componentWillLoad() {}

  /**
   * sides面ダイスをtimes回行う
   * @param times 
   * @param sides 
   * @return number
   */
  public diceroll(times: number, sides: number) {
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
    return(
      <div>
        <div>stencil diceroll app</div>
        <div>
          <div><input value={this.times} onChange={(event) => this.handleTimes(event)}></input>
          <span>D</span>
          <input value={this.sides} onChange={(event) => this.handleSides(event)}></input></div>
          <span>{this.times} D {this.sides}</span>
          
          <br/>
          <button onClick={() => this.diceroll(this.times, this.sides)}>diceroll</button>
        </div>
        {this.result !== 0 &&
          <div>Result: {this.result}</div>
        }
      </div>
    );
  }
}