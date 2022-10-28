import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import affairs from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => props.setFilter('all')// need to fix
    const setHigh = () => props.setFilter('high')
    const setMiddle = () => props.setFilter('middle')
    const setLow = () => props.setFilter('low')

    return (
        <div>

            <div className={affairs.affairs}>
                {mappedAffairs}
            </div>

            <ul className={affairs.items}>
                <li className={affairs.item}>
                    <SuperButton className={props.filter === "all" ? "button button--active" : "button"} onClick={setAll}>All</SuperButton>
                </li>
                <li className={affairs.item}>
                    <SuperButton className={props.filter === "high" ? "button button--active" : "button"} onClick={setHigh}>High</SuperButton>
                </li>
                <li className={affairs.item}>
                    <SuperButton className={props.filter === "middle" ? "button button--active" : "button"} onClick={setMiddle}>Middle</SuperButton>
                </li>
                <li className={affairs.item}>
                    <SuperButton className={props.filter === "low" ? "button button--active" : "button"} onClick={setLow}>Low</SuperButton>
                </li>
            </ul>
        </div>
    )
}

export default Affairs
