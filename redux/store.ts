import { configureStore } from '@reduxjs/toolkit';
import questionnaireReducer from './slices/questionnaireSlice';

export default configureStore({
  reducer: {
    questionnaire: questionnaireReducer,
  },
});
