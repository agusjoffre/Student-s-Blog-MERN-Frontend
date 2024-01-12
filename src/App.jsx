import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Post from './components/Post/Post';
import CreatorPage from './components/Creator/Creator';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/create" element={<CreatorPage />} />
        <Route path="/about" />
        <Route path="/documents" />
        <Route path="/register" />
        <Route path="/login" />
      </Routes>
    </>
  );
}

export default App;
