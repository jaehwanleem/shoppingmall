//밑에 <> 로 래핑되어 있는거의 논리적인 순차를 따져야한다 

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import App from './App';
import reportWebVitals from './reportWebVitals';

import { UserProvider } from './contexts/user.contexts';

import { BrowserRouter } from 'react-router-dom'; //리액트 라우터로 도메인 path ex) /shop 이런걸 구현하는데 필요한것 

import { ProductsProvider } from './contexts/product.contexts';

import { CartProvider } from './contexts/cart.contexts';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <div>
    <React.StrictMode>
      <BrowserRouter>
        <UserProvider>

          <ProductsProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </ProductsProvider>

        </UserProvider>
      </BrowserRouter>
    </React.StrictMode>

  </div>
);

//유저프로바이더 안에 프로덕트프로바이더가 있어야하는이유는 유저들에 따라 상품의 데이터가 다르게 나와야하는게 쇼핑몰에서 일반적이기 때문이다 



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
