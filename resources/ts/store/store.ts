import { combineReducers, configureStore } from "@reduxjs/toolkit";
import titlesReducer from '../features/TitlesSlice';
import imagesReducer from '../features/ImageSlice';
import { useSelector as rawUseSelector, TypedUseSelectorHook } from 'react-redux';

import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist";

const rootReducer = combineReducers({
    titles: titlesReducer,
    images: imagesReducer
})

// ストレージ エンジンを明示的に渡す
const persistConfig = {
    key: "root",
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
export const persistor = persistStore(store);