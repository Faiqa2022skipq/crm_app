import { all } from "@redux-saga/core/effects";
import customer from "../features/reducers";
export default function* rootSaga() {
  yield all([customer()]);
}
