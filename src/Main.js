import React from "react";
import ReactDOM from "react-dom";
import { Route, withRouter } from "react-router-dom";

//components for routes
import Home from "./contents/Home";
import About from "./contents/About"; 
import Doodles from "./contents/Doodles";

//Navbar UI
import Nav from "./components/Nav";

//Projects
import Bumblebee from "./projects/BumblebeeSpaces";
// import UP from "./projects/UbiquityPress";
// import Bampfa from "./projects/BampfaAr";
import Dialpad from "./projects/Dialpad";
// import Ethical from "./projects/EthicalApparel";
// import BI from "./projects/BerkeleyInnovation";
// import CritMaking from "./projects/Critmaking";


class Main extends React.Component {

showNav(){
	const path = this.props.location.pathname
	if(path == "/" | path == "/about" | path == "/doodles"){
		return <Nav />
	}  
}
// <Route path="/ubiquitypress" component={UP}/>
// <Route path="/bampfa" component={Bampfa}/>
// <Route path="/ethicalapparel" component={Ethical}/>
// <Route path="/berkeleyinnovation" component={BI}/>
// <Route path="/criticalmaking" component={CritMaking}/>

  render () {
    return (
    <div className="navwrapper">
    	{this.showNav()}
	      <div className="content"> 
	        <Route exact path="/" component={Home}/>
	        <Route path="/about" component={About}/>
	        <Route path="/doodles" component={Doodles}/> 
	      </div>
	      	<Route path="/bumblebeespaces" component={Bumblebee}/>
	        <Route path="/dialpad" component={Dialpad}/>
      </div>
    )
  }
}

export default withRouter(Main);