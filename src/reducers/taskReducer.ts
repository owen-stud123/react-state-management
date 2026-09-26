export type Task = {
  id: number;
  text: string;
};

export type State = Task[];

export type Action =
  | { type: "add"; payload: string }
  | { type: "remove"; payload: number };

export function taskReducer(state: State, action: Action): State {
  switch (action.type) {
    case "add": {
      const nextId =
        state.reduce((largestId, task) => Math.max(largestId, task.id), 0) + 1;

      return [...state, { id: nextId, text: action.payload }];
    }
    case "remove":
      return state.filter((task) => task.id !== action.payload);
    default:
      throw new Error("Unknown task action");
  }
}