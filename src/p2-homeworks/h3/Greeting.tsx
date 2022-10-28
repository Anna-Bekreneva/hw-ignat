import React, {ChangeEvent, KeyboardEvent} from 'react';
import './Greeting.css'
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    enterAddUser: (e: KeyboardEvent<HTMLInputElement>) => void
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, enterAddUser, addUser, error, totalUsers} // деструктуризация пропсов
) => {

    const inputClass = error ? "field--error" : "field" // need to fix with (?:)
    const errorMessage = error ?  <span className={"error"}>{error}</span> : null

    return (
        <div className={"greeting"}>
            <div className="greeting__top">
                <label className={"sr-only"} htmlFor="greeting-for">Enter username</label>
                <SuperInputText
                    id={"greeting-for"}
                    value={name}
                    onChange={setNameCallback}
                    onKeyDown={enterAddUser}
                    className={inputClass + " " + "greeting__field"}
                    onBlur={addUser}
                    placeholder={"Enter username"}
                />
            <SuperButton className={"button greeting__button"} onClick={addUser} disabled={error ? true : false}>add</SuperButton>
            </div>
            {errorMessage}
            <div className="greeting__counter">
                <span>Number of users: </span>
                <span className="greeting__number"> {totalUsers}</span>
            </div>
        </div>
    )
}

export default Greeting
