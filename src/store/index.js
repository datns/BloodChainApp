import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSageMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSageMiddleware();
const enhancers = composeWithDevTools(
  applyMiddleware(sagaMiddleware)
)

const store = createStore(rootReducer, enhancers)

sagaMiddleware.run(rootSaga);

export default store;