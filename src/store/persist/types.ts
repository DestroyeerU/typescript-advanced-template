import { MyState } from '../ducks/mystate_EXAMPLE/types';

export enum PersistTypes {
  REHYDRATE = 'persist/REHYDRATE',
}

export interface Persist {
  type: typeof PersistTypes.REHYDRATE;
  payload: {
    myState: MyState; // Delete this line after remove 'mystate_EXAMPLE' duck
  };
}
