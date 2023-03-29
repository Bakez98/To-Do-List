import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import taskReducer from "./taskReducer";
import {persistStore, persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"

const persistConfig = {
    key: "root",
    storage,
}

const allReducers = combineReducers({taskReducer})

const persistedReducer = persistReducer(persistConfig, allReducers)
const store = createStore(persistedReducer, {},applyMiddleware(thunk));
export const persistor = persistStore(store);
export default store;