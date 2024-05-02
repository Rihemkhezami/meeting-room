import { configureStore } from '@reduxjs/toolkit'; // Importez configureStore depuis Redux Toolkit
//import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers'; // Assurez-vous que le chemin vers vos réducteurs est correct
import { thunk } from 'redux-thunk';

const store = configureStore({
  reducer: rootReducer, // Utilisez votre rootReducer
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // Utilisez getDefaultMiddleware pour obtenir les middlewares par défaut de Redux Toolkit
});

export default store;
