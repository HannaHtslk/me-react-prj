import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Header from './Header/Header';
import About from '../pages/About';
import Contacts from '../pages/Contacts';
import NotFound from '../pages/NotFound';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};

export default App;
