import { Route, Routes, useLocation } from 'react-router-dom'
import PeopleDetails from './Routes/People_details/people_details'
import Layout from './Layout/layout'
import { lazy, Suspense, useContext } from 'react'
import { ThemeContext } from './Context/theme_context'
import { AnimatePresence } from 'framer-motion'
const Home = lazy(() => import('./Pages/Home/Home'))
const Movies = lazy(() => import('./Pages/Movies/Movies'))
const MovieInformation = lazy(() => import('./Routes/Movie_Information/movie_information'))
const Tv = lazy(() => import('./Pages/Tv/tv'))
const TvDetails = lazy(() => import('./Routes/Tv_details/tv_details'))
const People = lazy(() => import('./Pages/People/people'))
const Search = lazy(() => import('./Pages/Search/search'))
const PageNotFound = lazy(() => import('./Pages/404/404'))

function App() {
  const { theme } = useContext(ThemeContext)
  const location = useLocation()

  return (
    <div className={`${theme}`}>
      <Layout>
        <AnimatePresence >
          <Suspense>
            <Routes key={location.pathname} location={location}>
              <Route index element={<Home />} />
              <Route path='/movie'>
                <Route index element={<Movies />} />
                <Route path=':uid' element={<MovieInformation />} />
              </Route>
              <Route path='/tv'>
                <Route index element={<Tv />} />
                <Route path=':uid' element={<TvDetails />} />
              </Route>
              <Route path='/person'>
                <Route index element={<People />} />
                <Route path=':uid' element={<PeopleDetails />} />
              </Route>
              <Route path='/search' element={<Search />} />
              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </Layout>
    </div>
  )
}

export default App