import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom';
import HW1 from '../h1/HW1';
import {PreJunior} from './pages/PreJunior';
import {Junior} from './pages/Junior';
import {JuniorPlus} from './pages/JuniorPlus';
import App from '../../p1-main/m1-ui/u1-app/App';
import {HWAll} from './pages/HWAll';
import Error404 from './pages/Error404';

export const PATH = {
    HOME: '/',
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior++'
    // add paths
}

function Pages() {
    return (
        <div>
            {/*Routes выбирает первый подходящий роут*/}
            <Routes>

                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                {/*<Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>*/}
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.HOME} element={<HWAll/>}/>
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>


                // add routes

                {/*он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route path={'/*'} element={<Error404/>}/>

            </Routes>
        </div>
    )
}

export default Pages
