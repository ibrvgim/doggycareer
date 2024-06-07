import { configureStore } from '@reduxjs/toolkit';
import questionnaireReducer from './slices/questionnaireSLice';

export default configureStore({
  reducer: {
    questionnaire: questionnaireReducer,
  },
});
