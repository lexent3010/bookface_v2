import { getMe } from "./authReducer";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "./reduxStore";

const INITIALIZED_SUCCESS = "app/INITIALIZED_SUCCESS";

type InitialStateType = typeof initialState;

type ActionsTypes = InitializedSuccessTypes;

let initialState = {
  isInitialized: false,
};

const appReducer = (
  state = initialState,
  action: ActionsTypes
): InitialStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        isInitialized: true,
      };
    default:
      return state;
  }
};

type InitializedSuccessTypes = {
  type: typeof INITIALIZED_SUCCESS;
};

const initializedSuccess = (): InitializedSuccessTypes => ({
  type: INITIALIZED_SUCCESS,
});

type ThunkType = ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  ActionsTypes
>;

export const initialApp = () => (dispatch: any) => {
  dispatch(getMe()).then(() => {
    dispatch(initializedSuccess());
  });
};

export default appReducer;
