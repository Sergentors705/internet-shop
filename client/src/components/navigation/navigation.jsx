import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import { Context } from '../../';
import './style.css';

const Navigation = observer( () => {
  const {user} = useContext(Context);
  const navigate = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    navigate('/auth');
  }

  return (
    <Navbar expand='lg' className='bg-body-tertiary'>
    <Container>
      <NavLink className='navlink' to={'/shop'}>BuyDevice</NavLink>
      {user.isAuth ?
      <Nav className='me-auto nav'>
        <Button
          className='button'
          onClick={() => logOut()}
        >
          Log Out
        </Button>
        <Button
          className='button'
          onClick={() => navigate('/admin')}
        >
          Admin Panel
        </Button>
      </Nav>
      :
      <Nav className='me-auto nav'>
        <Button
          className='button'
          onClick={() => navigate('/auth')}
        >
          Log In
        </Button>
      </Nav>
      }
    </Container>
  </Navbar>
  )
});

export default Navigation;
