import React from 'react';
import {NavLink} from 'react-router-dom';
import {PATH} from './Pages';
import s from './Header.module.css';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

//junior junior++

function Header() {

	return (
		<nav className={s.nav}>
            <div className={s.nav__container + " " + "container"}>
                <SuperButton className={s.nav__button + " " + "button"}>Menu</SuperButton>
                <ul className={s.nav__items}>
                    <li className={s.nav__item}>
                        <NavLink className={s.nav__link} to={PATH.HOME}>home</NavLink>
                    </li>
                    <li className={s.nav__item}>
                        <NavLink className={s.nav__link} to={PATH.PRE_JUNIOR}>pre-junior</NavLink>
                    </li>
                    <li className={s.nav__item}>
                        <NavLink className={s.nav__link} to={PATH.JUNIOR}>junior</NavLink>
                    </li>
                    <li className={s.nav__item}>
                        <NavLink className={s.nav__link} to={PATH.JUNIOR_PLUS}>junior++</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
	);
}

export default Header;
