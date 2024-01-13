import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Post from './components/Post/Post';
import CreatorPage from './components/Creator/Creator';
import NotFound from './components/404';
import SignPage from './components/SignIn-SignUp/SignPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/create" element={<CreatorPage />} />
        <Route path="/about" element={<NotFound />} />
        <Route path="/documents" element={<NotFound />} />
        <Route path="/register" element={<SignPage />} />
        <Route path="/login" element={<SignPage />} />
      </Routes>
    </>
  );
}

export default App;
