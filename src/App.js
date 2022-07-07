import './App.scss';
import Home from './pages/home/home';
import Login from './pages/login/login';
import NewUser from './pages/new user/newUser';
import Single from './pages/single/single';
import {List} from './pages/list/list';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NewProduct from './pages/new product/newProduct';
import { ProList } from './pages/list/list';
import { useSelector } from "react-redux";
import {OrderList} from './pages/list/list'



function App() {
  const darkMode = useSelector(state=>state.darkmode.darkmode)

  return ( 
    <div className={darkMode ? "app dark" : "app"}>
    <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="users" >
        <Route index element={<List/>} />
        <Route path=':userId' element={<Single/>} />
        <Route path='newuser'element={<NewUser/>} />
      </Route>
      <Route path="products" >
        <Route index element={<ProList/>} />
        <Route path=':productId' element={<Single/>} title="Add new user"/>
        <Route path='newproduct'element={<NewProduct/>} title="Add new product" />
      </Route>
      <Route exact path="/orders" element={<OrderList />} />

    </Routes>
  </Router>
  </div>
  );
}

export default App;
