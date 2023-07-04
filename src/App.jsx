import './App.css';
import dayjs from 'dayjs';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { Home } from './Components/Home/Home';
import { Footer } from './Components/Footer/Footer';
import { Authentification } from './Components/AuthentificationPage/AuthentificationPage';
import { Search } from './Components/SearchPage/SearchPage';
import { Results } from './Components/ResultsPage/ResultsPage';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { addToken, removeExpireDate, removeToken } from './Components/store/StoreActions';

function App() {
  const tokenFromLs = localStorage.getItem('token')
  const tokenFromStore = useSelector(state => state.token)
  const dispatch = useDispatch()
  dispatch(addToken(tokenFromLs))
  useEffect(() => {
    const expireDate = localStorage.getItem('expire')
    if (expireDate) {
      const expireDateFormated = dayjs(expireDate).format('YYYY-MM-DD');
      const today = dayjs().format('YYYY-MM-DD');

      if (today === expireDateFormated) {
        localStorage.removeItem('expire')
        localStorage.removeItem('token')
        dispatch(removeExpireDate())
        dispatch(removeToken())
      }
    }
  }, [])

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/auth' element={<Authentification />}/>
            <>
              <Route path='/search' element={<Search />}/>
              <Route path='/search/results' element={<Results />}/>
            </>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;