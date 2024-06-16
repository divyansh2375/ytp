import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
// import {Provider} from "react-redux"
import store from './utils/store';

import { Provider } from 'react-redux';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

const appRouter = createBrowserRouter([{

  //body have having childerens which have having two components maincontainter as well as watchpage 
  path: "/",
  element : <Body />,
  children : [
    {
      path : "/",
      element : <MainContainer />
    },{
      path : "/watch",
      element : <WatchPage />
    }

  ]
  
}])
function App() {
  return (
    <Provider store={store}>

    <div className="App ">
      <Head />
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
