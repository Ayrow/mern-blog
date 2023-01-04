import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import DashboardMain from './pages/Dashboard/DashboardMain';
import ProfileSettings from './pages/Dashboard/ProfileSettings';
import {
  LandingPage,
  ErrorPage,
  PostsPage,
  LoginPage,
  ProtectedRoute,
} from './pages/index';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='posts' element={<PostsPage />} />

        <Route path='/dashboard/' element={<ProtectedRoute />}>
          <Route index element={<DashboardMain />} />
          <Route path='profile' element={<ProfileSettings />} />
        </Route>

        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
