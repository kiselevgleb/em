import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Main from './Main';
import Error404 from './components/Error404';
import List from './components/List';
import News from './components/News';
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';
import { createBrowserHistory } from "history";
import { getBabyRequest, getScooterRequest, getBikeRequest, getMotorWheelRequest, getListBikeRequest, getListSunRequest, getListBettRequest, getListMotorRequest, getOrderInfoRequest, getListInfoRequest, getListGibridRequest, getListBattRequest } from './actions/actionCreators';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';

function App(props) {
  const customHistory = createBrowserHistory();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrderInfoRequest());
    dispatch(getListInfoRequest());
    dispatch(getListGibridRequest());
    dispatch(getListMotorRequest());
    dispatch(getListBettRequest());
    dispatch(getListSunRequest());
    dispatch(getListBikeRequest());
    dispatch(getMotorWheelRequest());
    dispatch(getBikeRequest());
    dispatch(getScooterRequest());
    dispatch(getBabyRequest());
  })
  return (
    <Router history={customHistory}>
      <div>
        <Switch>
          <Route path='/electromobiles/news/:id' component={News} />
          <Route path="/electromobiles/elektromobili-svoimi-rukami/:id" component={News} />
          <Route path='/electromobiles/elektromobili-svoimi-rukami/' component={List} />
          <Route path="/electromobiles/elektromobili/:id" component={News} />
          <Route path='/electromobiles/elektromobili/' component={List} />
          <Route path="/electromobiles/gibrid/:id" component={News} />
          <Route path='/electromobiles/gibrid/' component={List} />
          <Route path="/electromobiles/motor/:id" component={News} />
          <Route path='/electromobiles/motor/' component={List} />
          <Route path="/electromobiles/sunmobile/:id" component={News} />
          <Route path='/electromobiles/sunmobile/' component={List} />
          <Route path='/bike/catalog/:id' component={News} />
          <Route path='/bike/catalog' component={List} />
          <Route path="/bike/:id" component={News} />
          <Route path='/bike/' component={List} />
          <Route path="/motorWheel/:id" component={News} />
          <Route path='/motorWheel/' component={List} />
          <Route path="/scooter/:id" component={News} />
          <Route path='/scooter/' component={List} />
          <Route path="/babyelectromobiles/:id" component={News} />
          <Route path='/babyelectromobiles/' component={List} />
          <Route path='/electromobiles/batteries/' component={List} />
          <Route exact path='/' component={Main} />
          <Route path='/' component={Error404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;