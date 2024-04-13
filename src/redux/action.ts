import { ACTION_1 } from "./constants";

export function action1(requiredParameters: any) {
  return {
    type: ACTION_1,
    data: requiredParameters,
  };
}
