import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home'

const Routes: React.FC = () => {
  return (
      <BrowserRouter>
          <Route path="/" element={<Home />} /> 
      </BrowserRouter>
  );
};

export default Routes;