import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Movies from './Pages/Movies/Movies'
import PageNotFound from './Pages/404/404'
import MovieDetails from './Routes/Movie_details/movie_details'
import Tv from './Pages/Tv/tv'
import TvDetails from './Routes/Tv_details/tv_details'
import PeopleDetails from './Routes/People_details/people_details'
import Layout from './Layout/layout'
import { useContext } from 'react'
import { ThemeContext } from './Context/theme_context'
import People from './Pages/People/people'

function App() {
  const { theme } = useContext(ThemeContext)
  return (

    <div className={`${theme}`}>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/movie'>
            <Route index element={<Movies />} />
            <Route path=':id' element={<MovieDetails />} />
          </Route>
          <Route path='/tv'>
            <Route index element={<Tv />} />
            <Route path=':id' element={<TvDetails />} />
          </Route>
          <Route path='/people'>
            <Route index element={<People />} />
            <Route path=':id' element={<PeopleDetails />} />
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App
