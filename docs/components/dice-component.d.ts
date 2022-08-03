import type { Components, JSX } from "../types/components";

interface DiceComponent extends Components.DiceComponent, HTMLElement {}
export const DiceComponent: {
  prototype: DiceComponent;
  new (): DiceComponent;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
