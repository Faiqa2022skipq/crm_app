import { all } from "@redux-saga/core/effects";
import { watchCreateCustomer } from "./create";
import { watchEditCustomer } from "./edit";

export default function* customer() {
  yield all([watchCreateCustomer(), watchEditCustomer()]);
}
