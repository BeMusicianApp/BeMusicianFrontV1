import React from 'react';
import { Route, Routes as RoutesContainer } from 'react-router-dom';
import * as URL from '../constants/urls/urlFrontEnd';
import { PrivateRoute } from './privateRoute';
import LoginScreen from '../Screens/LoginScreen';
import HomeScreen from '../Screens/HomeScreen';
import PresentationScreen from '../Screens/PresentationScreen';
import LogoutScreen from '../Screens/logoutscreen';
import { ROLE_USER } from '../constants/role';
import ProfilScreen from '../Screens/ProfilScreen';
import ChoixInstrumentScreen from '../Screens/ChoixInstrumentScreen';
import CreationScreen from '../Screens/creationScreen';
import PlayScreen from '../Screens/PlayScreen';
import GuitareScreen from '../Screens/GuitareScreen';


const Routes = () => {
    return (
        <RoutesContainer>
            <Route
                 path={URL.URL_HOME} 
                 element={
                    <PrivateRoute roles={[ROLE_USER]}>
                        <HomeScreen />
                    </PrivateRoute>
                    }
            />
                <Route
                 path={URL.URL_PROFILE} 
                 element={
                    <PrivateRoute roles={[ROLE_USER]}>
                        <ProfilScreen />
                    </PrivateRoute>
                    }
            />

            <Route path={URL.URL_LOGIN} element={<LoginScreen/>}/> 
            <Route path={URL.URL_PRESENTATION} element={<PresentationScreen/>}/> 
            <Route path={URL.URL_CREATION} element={<CreationScreen/>}/> 
            <Route path={URL.URL_PLAYER} element={<PlayScreen/>}/>
            <Route path={URL.URL_GUITARE} element={<GuitareScreen/>}/> 
            <Route path={URL.URL_INSTRUMENT} element={<ChoixInstrumentScreen/>}/>
        </RoutesContainer>
    );
};

export default Routes;