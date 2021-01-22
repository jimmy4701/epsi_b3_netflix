import React from 'react'
import styled from 'styled-components'

const Landing = () => {

  return (
    <MainContainer>
      <Header>
        <h1>Films, séries TV, et bien plus<br/>en illimité.</h1>
        <h3>Où que vous soyez. Annulez à tout moment.</h3>
        <p>Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre abonnement.</p>
      </Header>
    </MainContainer>
  );
}

const MainContainer = styled.div``

const Header = styled.div`
  background-image: url('https://assets.nflxext.com/ffe/siteui/vlv3/b6f906ab-4f9f-49b5-a63b-6a3b29c8d04b/b6af7fc1-fcc2-4659-a949-4c62c0f7d21e/FR-fr-20210118-popsignuptwoweeks-perspective_alpha_website_small.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  height: 80vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  color: white;
  text-align: center;
  align-items: center;
  justify-content: center;
`

export default Landing;
