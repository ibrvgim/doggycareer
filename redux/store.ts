import { configureStore } from '@reduxjs/toolkit';
import questionnaireReducer from './slices/questionnaireSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      questionnaire: questionnaireReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

// import { configureStore } from '@reduxjs/toolkit';
// import questionnaireReducer from './slices/questionnaireSlice';

// export default configureStore({
//   reducer: {
//     questionnaire: questionnaireReducer,
//   },
// });
