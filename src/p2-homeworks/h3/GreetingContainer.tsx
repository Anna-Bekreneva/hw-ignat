import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import Greeting from './Greeting'
import {UserType} from './HW3';

type GreetingContainerPropsType = {
    users: Array<UserType>  // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>("") // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value) // need to fix
        if (name && error) {
            setError("")
        }
    }

    const addUser = () => {
        const nameTrimmed = name.trim()

        if (nameTrimmed) {
            alert(`Hello  ${nameTrimmed}!`) // need to fix
            addUserCallback(name)
            setName("")
            setError('')
        } else {
            setError("Input is required")
            setName("")
        }
    }

    const enterAddUser = (e: KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && addUser()

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            error={error}
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            enterAddUser = {enterAddUser}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
