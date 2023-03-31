import { useFilters } from '../hooks/useFilters';
import './Footer.css';

const Footer = () => {
  const { filters } = useFilters();

  return (
    <footer className="footer">
      {JSON.stringify(filters, null, 2)}
      {/* <h4>Prueba tecnica de React</h4> */}
      {/* <h5>Shopping Cart with useContext & useReducer</h5> */}
    </footer>
  );
};

export default Footer;
