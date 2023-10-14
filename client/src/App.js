import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { BrowserRouter } from 'react-router-dom';
import { Context } from '.';
import './App.css';
import AppRouter from './components/app-router/app-router';
import Navigation from './components/navigation/navigation';
import { check } from './http/user-api';


const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    check().then(data => {
        user.setUser(true)
        user.setIsAuth(true)
    }).finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className='loader-container'>
        <Spinner animation='border' variant='primary' />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Navigation />
      <AppRouter />
    </BrowserRouter>
  );
})

export default App;
