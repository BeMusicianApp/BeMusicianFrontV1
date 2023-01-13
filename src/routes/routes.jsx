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
import RegisterScreen from '../Screens/RegisterScreen';


const Routes = () => {
    return (
        <RoutesContainer>
            <Route
                 path={URL.URL_HOME} roles={[ROLE_USER]}
                 element={
                    
                        <HomeScreen />
                    
                    }
            />
                <Route
                 path={URL.URL_PROFILE} roles={[ROLE_USER]}
                 element={
                    <PrivateRoute >
                        <ProfilScreen />
                    </PrivateRoute>
                    }
            />
            <Route path={URL.URL_REGISTER} element={<RegisterScreen/>}/>
            <Route path={URL.URL_LOGIN} element={<LoginScreen/>}/> 
            <Route path={URL.URL_PRESENTATION} element={<PresentationScreen/>}/> 
            <Route path={URL.URL_CREATION} roles={[ROLE_USER]} element={<PrivateRoute ><CreationScreen/></PrivateRoute>}/> 
            <Route path={URL.URL_PLAYER} roles={[ROLE_USER]}  element={<PlayScreen/>}/>
            <Route path={URL.URL_GUITARE} roles={[ROLE_USER]} element={<GuitareScreen/>}/> 
            <Route path={URL.URL_INSTRUMENT} roles={[ROLE_USER]}  element={<PrivateRoute ><ChoixInstrumentScreen/></PrivateRoute>}/>
        </RoutesContainer>
    );
};

export default Routes;