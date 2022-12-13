import {Routes, Route} from 'react-router-dom';
import Add from './components/pages/Add/Add';
import Edit from './components/pages/Edit/Edit';
import Home from './components/pages/Home/Home';
import NotFound from './components/pages/NotFound/NotFound';
import About from './components/pages/About/About';
import Post from './components/pages/Post/Post';
import { Container } from 'react-bootstrap';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';

const App = () => {
  return (
    <main>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/post/:id" element={<Post />}/>
          <Route path="/post/add" element={<Add />}/>
          <Route path="/post/edit/:id" element={<Edit />}/>
          <Route path="/about" element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
    </main>
  );
};

export default App;