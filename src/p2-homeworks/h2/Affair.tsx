import React from 'react'
import {AffairType} from './HW2';
import affair from './Affair.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (id: number) => {
        props.deleteAffairCallback(id)
    }// need to fix

    return (
        <div className={affair.affair}>
            <span className={affair.priority}> {props.affair.priority}</span>
            <span className={affair.name}> {props.affair.name} </span>
            <SuperButton className={"del"} onClick={() => (deleteCallback(props.affair._id))}>
                <span className="sr-only">Delete affair</span>
            </SuperButton>
        </div>
    )
}

export default Affair
