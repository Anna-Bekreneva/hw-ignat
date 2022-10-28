import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from 'uuid';

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]) // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        const newUser: UserType = {
            _id: v1(),
            name: name
        }
        setUsers([...users, newUser]) // need to fix
    }

    return (
        <section className="section">
            <div className="container">
                <h2 className="title">Homework 3</h2>
                <GreetingContainer users={users} addUserCallback={addUserCallback}/>
            </div>
        </section>
    )
}

export default HW3
