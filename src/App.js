import {Routes, Route} from 'react-router-dom';
import Edit from './components/pages/Edit/Edit';
import Home from './components/pages/Home/Home';
import NotFound from './components/pages/NotFound/NotFound';
import About from './components/pages/About/About';
import Post from './components/pages/Post/Post';
import { Container } from 'react-bootstrap';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import PostAdd from './components/pages/PostAdd/PostAdd';
import Categories from './components/pages/Categories/Categories';
import PostCategory from './components/features/PostCategory'

const App = () => {
  return (
    <main>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/post/:id" element={<Post />}/>
          <Route path="/post/add" element={<PostAdd />}/>
          <Route path="/post/edit/:id" element={<Edit />}/>
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:postCategory" element={<PostCategory />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
    </main>
  );
};

export default App;