import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/home'
import Header from './components/Header/header'
import Login from './components/Login/login'
import MoviePage from './Pages/Movies/movie'
import MovieDetails from './Pages/Movies/movieDetails'
import Favorites from './components/Favourites/Favorites'
import { Provider } from 'react-redux'
import store from './Store/Slices/store'

function App() {
  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
      <Header />
        <Routes>
        <Route index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/movie' element={<MoviePage />} />
        <Route path='/movieDetails/:movieID' element={<MovieDetails />} />
        <Route path="/Favorites" element={<Favorites />} />

        </Routes>
      </BrowserRouter>
    </Provider>
      
    </>
  )
}

export default App
