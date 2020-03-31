import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import "antd/dist/antd.css";
// import component
import ProductList from "./Page/Products/ProductList";
import Home from "./components/Home";
import AddProduct from "./Page/Products/AddProduct";
// import QRCode from './components/QRCode';
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Categories from "./Page/Categories/Categories";

function App() {
    return (
        <Router>
            <Navbar />
            <div className="body_wrapper d-flex">
                <div className="Sidebar">
                    <Sidebar />
                </div>
                <div className="Content">
                    <div>
                        <Route path="/" exact component={Home} />
                        <Route path="/products" exact component={ProductList} />
                        <Route
                            path="/addProduct"
                            exact
                            component={AddProduct}
                        />
                        <Route path="/categories" exact component={Categories} />
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
