import { legacy_createStore as createStore, combineReducers } from "redux"
import example_you_can_remove from "../Handle/example_you_can_remove";

const root = combineReducers({
    // bắt có 1 tham chiếu truyền ở đây ko bị lỗi đỏ
    category_2: example_you_can_remove
})
const store = createStore(root);
export default store;