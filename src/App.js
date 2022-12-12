import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import IdleTimerCustom from './Components/IdleTimerCustom';
import Header from './Components/Header'
import { selectIsLogged, signIn } from './redux-store/authenticationSlice';
import Routes from './routes/routes';
import { getToken } from './services/tokenServices';

const contextClass = {
  success: 'bg-green-600',
  error: 'bg-red-600',
  info: 'bg-blue-600',
  warning: 'bg-yellow-500',
  default: 'bg-indigo-600',
  dark: 'bg-white-600 font-gray-300',
};


const App = () => {

  const isLogged = useSelector(selectIsLogged);
    const dispatch = useDispatch();
    const [isLogin, setIsLogin] = useState(true);

    useEffect(() => {
        const token = getToken();
        if (token) dispatch(signIn(token));
        setIsLogin(false);
    }, []);

    return (
      <>
        <BrowserRouter>
            <div className="flex h-screen cursor-default flex-col">
                {isLogged 
                // && <IdleTimerCustom />
                }
                <Header />
                <main className="flex h-full flex-col overflow-y-auto">
                    <Routes />
                </main>
                <ToastContainer
                    toastClassName={({ type }) =>
                        contextClass[type || 'default'] +
                        ' relative flex p-1 h-10 rounded-md justify-between overflow-hidden cursor-pointer'
                    }
                    bodyClassName={() => 'text-sm font-white font-med block p-3'}
                    position="bottom-left"
                    autoClose={3000}
                />
            </div>
        </BrowserRouter>
      </>
    );
};

export default App;
