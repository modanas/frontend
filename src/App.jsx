// import Course from "./components/Course"
import Signup from "./components/Signup"
import Courses from "./courses/Courses"
import Home from "./home/home"
import { Navigate, Route, Routes } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import { useAuth } from "./context/AuthProvider"
import ContactPage from "./components/Contact"
import About from "./components/About"


const App = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser)
	
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course" element={authUser ? <Courses /> : <Navigate to ="/signup"/>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/contact" element={<ContactPage/>} />
      <Route path="/about" element={<About />} />
    </Routes>
    <Toaster />
    </div>
    </>
  )
}

export default App

