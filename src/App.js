import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/header/Header';
import Home from './components/Home';
import Movie from './components/movie/Movie';
import NotFound from './components/notFound/NotFound';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:movieId' element={<Movie />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  </>
);

export default App;

//https://weibenfalk.teachable.com/courses/1146345/lectures/24615252
//https://github.com/weibenfalk/react-rmdb-v3-starter-files
