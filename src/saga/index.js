import { all, takeEvery } from "redux-saga/effects";
import { REQUEST_LOGIN, setLogedUser } from "../actions";

function* watchLoginRequest() {
  // eslint-disable-next-line require-yield
  yield takeEvery(REQUEST_LOGIN, function* ({ item }) {
    try {
      console.log("In the watcher of request login");
      console.log(item);
      const response = yield fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      });
      const res = yield response.json();
      alert(res.data.message); // eslint-disable-line no-alert
      localStorage.setItem("token", res.data.token);
      setLogedUser(res);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  });
}

export default function* rootSaga() {
  yield all([
    watchLoginRequest(),
  ]);
}
