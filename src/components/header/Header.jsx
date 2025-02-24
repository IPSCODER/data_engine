import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../../ui/button/Button'
import { useUser } from '../../context/context'


const Styledheader = styled.header`
display:flex;
align-items:center;
justify-content:space-between;
padding:20px;
background-color: #007bff;
`

const StyledList = styled.ul`
display:flex;
flex-direction:row;  
gap: 20px;
list-style: none;
`


const Header = () => {

  const {setUser} = useUser()
  const navigate = useNavigate()

  const logout = () =>{
    setUser(null);
    navigate('/login'); 
  }

  return (
    <Styledheader>
      <>
        <StyledList>
          <li><Link to={'/'} >User</Link></li>
          <li><Link to={'/admin'} >Admin</Link></li>
        </StyledList>
        <Button onClick={logout} > 
          Logout
        </Button>
      </>
    </Styledheader>
  )
}

export default Header