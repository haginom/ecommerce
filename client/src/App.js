import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Signup from './pages/Signup';
import Trainers from './pages/Trainers';
import { FAQs, FindAStore, SizeChart, Contact } from './pages/CustomerService';
import Home from './pages/Home';
import TrainersId from './pages/TrainersId';

function App() {  
  return ( 
    <Router>
      <Header />
      <Switch>
        <Route exact path="/"> <Home/> </Route> 
        <Route exact path="/signup"> <Signup/> </Route> 
        <Route exact path="/trainers"> <Trainers/> </Route> 
        <Route path="/trainers/:trainersId"> <TrainersId/></Route> 
        <Route exact path='/customerservice'> <Contact/> </Route> 
        <Route path='/customerservice/faqs'> <FAQs/> </Route> 
        <Route path='/customerservice/sizechart'> <SizeChart/> </Route> 
        <Route path='/customerservice/stores'> <FindAStore/> </Route> 
        {/* <Route path="/trainers/adidas" component={TrainersAdidas} /> */}
        {/* <Route path="/trainers/asics" exact component={TrainersAsics} />
        <Route path="/trainers/converse" exact component={TrainersConverse} />
        <Route path="/trainers/newbalance" exact component={TrainersNewBalance} />
        <Route path="/trainers/nike" exact component={TrainersNike} />
        <Route path="/trainers/puma" exact component={TrainersPuma} />
        <Route path="/trainers/reebok" exact component={TrainersReebok} />
        <Route path="/trainers/vans" exact component={TrainersVans} /> */}
      </Switch>
    </Router>
  );
}

export default App;
