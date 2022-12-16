import React, { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductPage from './pages/productPage';
import HomePage from './pages/homePage';

export const NavBar = createContext(null);

function App() {
  const [cardsArry, setCardsArry] = useState([]);
  const [favArryProducts, setFavArryProducts] = useState([]);
  const [close, setClose] = useState(false);
  console.log({cardsArry});
  return (
    <>
      <NavBar.Provider value={{
        cards: [cardsArry, setCardsArry],
        closeState: [close, setClose],
        favList: [favArryProducts, setFavArryProducts]
      }}>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path='productListing' element={<ProductPage />} />
          </Routes>
        </BrowserRouter>
      </NavBar.Provider>
    </>
  );
}

export default App;
