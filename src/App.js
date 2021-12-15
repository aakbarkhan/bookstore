import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/nav';
import Books from './components/books';
import Categories from './components/categories';

const App = () => (
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route exact path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </BrowserRouter>
);

export default App;
