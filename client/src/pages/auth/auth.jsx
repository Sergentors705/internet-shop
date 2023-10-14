import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useLocation, useNavigate } from 'react-router-dom';
import { Context } from '../..';
import { login, registration } from '../../http/user-api';
import './style.css';

const Auth = observer(() => {
  const {user} = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();
  const isntLogin = location.pathname === '/registration';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const click = async () => {
    try {
      let data;
      if (isntLogin) {
        data = await registration(email, password);
      } else {
        data = await login(email, password);
      }
      user.setUser(user);
      user.setIsAuth(true);
      navigate('/shop');
    } catch (error) {
      alert(error.response.data.message);
    }

  }

  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{height: window.innerHeight - 54}}
    >
      <Card className='p-5' style={{width: 600}}>
        <h2 className='m-auto'>{isntLogin ? 'Registration' : 'Authorization'}</h2>
        <Form className='d-flex flex-column p-1'>
          <Form.Control
            className='mt-2'
            placeholder='Enter e-mail'
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <Form.Control
            type='password'
            className='mt-2'
            placeholder='Enter password'
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
          <Row className='d-flex justify-content-between mt-4'>
            {isntLogin
            ?<Button href='/auth' style={{flexBasis: 'fit-content'}} variant='warning'>Authorization</Button>
            :<Button href='/registration' style={{flexBasis: 'fit-content'}} variant='warning'>Registration</Button>
            }
            <Button
              style={{flexBasis: 'fit-content'}}
              variant='success'
              onClick={click}
            >
              {isntLogin ? 'Register' : 'Log In'}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  )
})

export default Auth;
