import { ACTION_2 } from "../constants";

const initialState = {
  stateData: "qwerty",
  metrics: [
    {
      label: "Revenue",
      currentValue: 56945,
      previousValue: 25000,
      prefix: "$",
      suffix: "",
    },
    {
      label: "Users",
      currentValue: 76.8,
      previousValue: 80,
      prefix: "",
      suffix: "%",
    },
    {
      label: "New Signups",
      currentValue: 116,
      previousValue: 0,
      prefix: "",
      suffix: "",
    },
    {
      label: "Retention",
      currentValue: 12.67,
      previousValue: 11.8,
      prefix: "$",
      suffix: "",
    },
  ],
};

type Action = {
  type: string;
  data: any;
};

export const dashboardReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ACTION_2:
      return {
        ...state,
        stateData: state.stateData + action.data,
      };
    default:
      return state;
  }
};
