import React from 'react';
import ReactDOM from 'react-dom/client';
import "slick-carousel/slick/slick.css";
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import firebaseConfig from './firebase.config';
import { store , persistor} from './redux/store';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate Loading={"loading"} persistor={persistor}>
        <App/>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);


