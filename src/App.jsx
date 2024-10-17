import { createBrowserRouter, Router , Route, RouterProvider, Routes, BrowserRouter } from "react-router-dom";
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'

export default function App() {

  // const router  = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <><Home /></>
  //   },
  //   {
  //     path: '/pms',
  //     element: <><PMS /></>
  //   },
  //   {
  //     path: '/aif',
  //     element: <><AIF /></>
  //   },
  //   {
  //     path: '/publications',
  //     element: <><Publications /></>
  //   },
  //   {
  //     path: '/amc',
  //     element: <><AMC /></>
  //   },
  //   {
  //     path: '/about',
  //     element: <><About /></>
  //   },
  //   {
  //     path: '/login',
  //     element: <><Login /></>
  //   },
  //   {
  //     path: '/signup',
  //     element: <><Signup /></>
  //   },
  //   {
  //     path: '/portfolio/:id',
  //     element: <><Portfolio /></>
  //   },
  //   {
  //     path: '*',
  //     element: <><ErrorPage /></>
  //   }
  // ])

  return (
  <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
  </>
  )
}
