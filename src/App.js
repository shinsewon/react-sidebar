import './App.css'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Sidebar from "./components/Sidebar";
import OverView from "./pages/OverView";
import {Reports,ReportsOne,ReportsThree,ReportsTwo} from './pages/Reports'

function App() {
    return (
        <Router>
            <Sidebar/>
            <Switch>
                <Route exact path={'/overview'} component={OverView}/>
                <Route exact path={'/reports'} component={Reports}/>
                <Route exact path={'/reports/1'} component={ReportsOne}/>
                <Route exact path={'/reports/2'} component={ReportsThree}/>
                <Route exact path={'/reports/3'} component={ReportsTwo}/>
            </Switch>
        </Router>
    );
}

export default App;
