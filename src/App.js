import {Routes, Route} from 'react-router-dom';
import Add from './components/pages/Add/Add';
import Edit from './components/pages/Edit/Edit';
import Home from './components/pages/Home/Home';
import NotFound from './components/pages/NotFound/NotFound';
import About from './components/pages/About/About';
import Post from './components/pages/Post/Post';

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/post/:id" element={<Post />}/>
        <Route path="/post/add" element={<Add />}/>
        <Route path="/post/edit/:id" element={<Edit />}/>
        <Route path="/about" element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default App;