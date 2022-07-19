import Home from './routes/home/home.componet'
import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.componet';
import SignIn from './routes/sign-in/sign-in.component'


const Shop = () => {
  return (<h1> hello</h1>)
}

const App = () => {
  // 하드코딩 대신 카테고리를 놔둬서 코드를 작게 냅둔다

  return (
    <Routes>

      <Route path='/' element={<Navigation />}>
        {/* 밑에 두개 자식패쓰  */}
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />


      </Route>



    </Routes>

  );
}

export default App;
