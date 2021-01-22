import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    return(
        <MainContainer>
            <CustomLink to="/">Accueil</CustomLink>
            <CustomLink to="/home">Home</CustomLink>
        </MainContainer>
    )
}

const MainContainer = styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    color: white;
    display: flex;
    background-color: rgba(0,0,0,0.5);
    height: 3em;
    align-items: center;
    padding: 0 2em;
`

const CustomLink = styled(Link)`
    color: white;
    text-decoration: none;
    margin-right: 1em;
`

export default Navbar