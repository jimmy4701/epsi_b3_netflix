import React, {useState, useContext} from 'react'
import Button from './Button'
import UserContext from '../contexts/UserContext'
import styled from 'styled-components'

const SigninForm = (props) => {
    const [email, setEmail] = useState("bob@yopmail.com")
    const [password, setPassword] = useState("")

    const {setUser} = useContext(UserContext)

    const login = (e) => {
        e.preventDefault()
        setUser({
            username: email
        })
        if(props.onLogin){
            props.onLogin()
        }
    }

    return(
        <CustomForm onSubmit={login}>
            <input type="email" placeholder="Votre email" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="Mot de passe" value={password} onChange={e => setPassword(e.target.value)}/>
            <Button>S'identifier</Button>
        </CustomForm>
    )
}

const CustomForm = styled.form`
    display: flex;
    flex-direction: column;

    > input {
        margin-bottom: 1em;
        padding: 0.5em;
        font-size: 2em;
    }
`

export default SigninForm