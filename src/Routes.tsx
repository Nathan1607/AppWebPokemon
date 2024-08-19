import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home'
import Pokemon from './pages/Pokemon';

const Routes: React.FC = () => {
  return (
      <BrowserRouter>
          <Route path="/" element={<Home />} /> 
          <Route path="/pokemon" element={<Pokemon />} />
      </BrowserRouter>
  );
};

export default Routes;