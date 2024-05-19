
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css'; 

const HomePage = lazy(() => import('./pages/HomePage'));
const TopRatedPage = lazy(() => import('./pages/TopRatedPage'));
const UpcomingPage = lazy(() => import('./pages/UpcomingPage'));
const MovieDetailPage = lazy(() => import('./pages/MovieDetailPage'));
const SearchPage = lazy(() => import('./pages/SearchPage'));

const App = () => {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/top-rated" element={<TopRatedPage />} />
          <Route path="/upcoming" element={<UpcomingPage />} />
          <Route path="/movie/:id" element={<MovieDetailPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
