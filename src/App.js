import './App.css';
import Homepage from './pages/Homepage/Homepage';
import ProductSell from './pages/ProductSell/ProductSell';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About/About';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/">
                    <Route path="/" element={<Homepage />} />
                    <Route path="about" element={<About />} />
                    <Route path="productsell" element={<ProductSell />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
