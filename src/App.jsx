import { createBrowserRouter, Router , Route, RouterProvider, Routes, BrowserRouter } from "react-router-dom";
import Home from './pages/Home'
import PMS from './pages/PMS';
import AIF from './pages/AIF';
import Publications from './pages/Publications';
import AMC from './pages/AMC';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Portfolio from "./pages/Portfolio";
import ErrorPage from './pages/ErrorPage';
import Navbar from "./components/Navbar";
import CustomFooter from "./components/CustomFooter";
import Floater from "./components/Floater";

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
  <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pms" element={<PMS />} />
      <Route path="/aif" element={<AIF />} />
      <Route path="/publications" element={<Publications />} />
      <Route path="/amc" element={<AMC />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />   
      <Route path="/portfolio/:id" element={<Portfolio />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
    <Floater />
    <CustomFooter />
  </BrowserRouter>
  </>
  )
}
