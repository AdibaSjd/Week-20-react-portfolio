import React from "react";

import "./app.css"
//this is importing the portfolio container which the page is generated from 
import PortfolioContainer from "./components/PortfolioContainer";

//everything starts from this one root element 
const App = () => <PortfolioContainer />;

export default App;