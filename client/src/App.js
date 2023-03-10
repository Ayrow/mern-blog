import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import {
  AddPost,
  AllPosts,
  DashboardMain,
  ManageUsers,
  ProfileSettings,
  SavedPosts,
  AllUserComments,
  AllComments,
} from './pages/Dashboard/index';

import {
  LandingPage,
  ErrorPage,
  PostsPage,
  LoginPage,
  ProtectedRoute,
} from './pages/index';
import SinglePostPage from './pages/SinglePostPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='posts' element={<PostsPage />} />
        <Route path={`posts/:id`} element={<SinglePostPage />} />

        <Route
          path='/dashboard/'
          element={
            <ProtectedRoute>
              <DashboardMain />
            </ProtectedRoute>
          }>
          <Route path='add-post' element={<AddPost />} />
          <Route path='all-posts' element={<AllPosts />} />
          <Route path='manage-comments' element={<AllComments />} />
          <Route path='manage-users' element={<ManageUsers />} />
          <Route path='saved-posts' element={<SavedPosts />} />
          <Route path='my-comments' element={<AllUserComments />} />
          <Route path='profile-settings' element={<ProfileSettings />} />
        </Route>

        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
