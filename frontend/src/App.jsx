
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Elements/Navbar'
import Home from './MainApp/Home'
import Signup from './MainApp/Signup'
import Signin from './MainApp/Signin'
import Ro from './MainApp/Ro'
import Udash from './Userapp/Udash'
import Adlogin from './MainApp/Adlogin'
import Addash from './Adminapp/Addash'
import Nofound from './MainApp/Nofound'
import Viewuser from './Adminapp/Viewuser'
import Feed from './Userapp/Feed'
import Footer from './Elements/Footer'
import ViewComplain from './Userapp/ViewComplain'
import ViewSuggestion from './Userapp/ViewSuggestion'
import ViewAppreciation from './Userapp/ViewAppreciation'
import ViewOtherFeed from './Userapp/ViewOtherFeed'
import ViewAdComplain from './Adminapp/ViewAdComplain'
import ViewAdSuggestion from './Adminapp/ViewAdSuggestion'
import ViewAdAppreciation from './Adminapp/ViewAdAppreciation'
import ViewAdOtherFeed from './Adminapp/ViewAdOtherFeed'
import BeMember from './Userapp/BeMember'
import ViewAdMembership from './Adminapp/ViewAdMembership'
import ViewAdWorkout from './Adminapp/ViewAdWorkout'
import UpdateProfile from './Userapp/UpdateProfile'
import EditUser from './Adminapp/EditUser'

function App() {

  
  return (
    <>
    {/* outer start */}
      <div className='container-fluid'>
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Signup' element={<Signup/>}/>
          <Route path='/Signin' element={<Signin/>}/>
          <Route path='/Ro' element={<Ro/>}/>
          <Route path='/User' element={<Udash />}/>
          <Route path='/UpdateProfile' element={<UpdateProfile />}/>
          <Route path='/Adlogin' element={<Adlogin />}/>
          <Route path='/Addash' element={<Addash />}/>
          <Route path='/Viewuser' element={<Viewuser />}/>
          <Route path='/Feed' element={<Feed />}/>
          <Route path='/ViewComplain' element={<ViewComplain />}/>
          <Route path='/ViewSuggestion' element={<ViewSuggestion />}/>
          <Route path='/ViewAppreciation' element={<ViewAppreciation />}/>
          <Route path='/ViewOtherFeed' element={<ViewOtherFeed />}/>
          <Route path='/ViewAdMembership' element={<ViewAdMembership />}/>
          <Route path='/ViewAdWorkout' element={<ViewAdWorkout />}/>
          <Route path='/ViewAdComplain' element={<ViewAdComplain />}/>
          <Route path='/ViewAdSuggestion' element={<ViewAdSuggestion />}/>
          <Route path='/ViewAdAppreciation' element={<ViewAdAppreciation />}/>
          <Route path='/ViewAdOtherFeed' element={<ViewAdOtherFeed />}/>
          <Route path='/BeMember' element={<BeMember />}/>
          <Route path='/EditUser' element={<EditUser />}/>
          {/* '/:404' changed to '*' */}
          <Route path='*' element={<Nofound />}/>
        </Routes>
        <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
