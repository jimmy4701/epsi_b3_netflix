import React, {useContext} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from './Button'
import UserContext from '../contexts/UserContext'

const Navbar = (props) => {

    const {user, setUser} = useContext(UserContext)

    const logout = () => {
        setUser(false)
    }

    const login = () => {
        setUser({
            username: "Bob"
        })
    }

    return(
        <MainContainer user={user}>
            <LeftContainer>
                <NetflixLogo src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"/>
                {user &&
                    <>
                        <CustomLink to="/home">Accueil</CustomLink>
                        <CustomLink to="/series">Séries</CustomLink>
                        <CustomLink to="/movies">Films</CustomLink>
                        {user.admin && <CustomLink to="/admin">Admin</CustomLink>}
                    </>
                }
            </LeftContainer>
            <RightContainer>
                {user ?
                    <CustomLink to="/" onClick={logout}>Se déconnecter ({user.username})</CustomLink>
                :
                    <CustomButton to="/home" onClick={login}>S'identifier</CustomButton>
                }
            </RightContainer>
        </MainContainer>
    )
}

const CustomButton = styled(Button)`
    background-color: red;
    color: white;
    font-size: 0.9em;
`

const MainContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    color: white;
    display: flex;
    background-color: black;
    height: 3em;
    align-items: center;
    padding: 0.5em 2em;
    z-index: 100;
    justify-content: ${props => props.user ? "space-between" : "space-evenly"};
`

const NetflixLogo = styled.img`
    height: 70%;
    margin-right: 2em;
`

const CustomLink = styled(Link)`
    color: white;
    text-decoration: none;
    margin-right: 1em;
`

const LeftContainer = styled.div`
    display: flex;
    align-items: center;
    height: inherit;
`

const RightContainer = styled.div`

`


export default Navbar