import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
// import Header from './Header/Header';
import About from '../pages/About';
import Contacts from '../pages/Contacts';
import NotFound from '../pages/NotFound';
import Layout from './Layout/Layout';

const App = () => {
  return (
    <div>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
