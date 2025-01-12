import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Journey from "./components/Journey";
import Pics from "./components/Pics";
import CV from "./components/CV";
import Run from "./components/Run";
import Certs from "./components/certs";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "0px 60px 60px 40px",
        // margin: "20px"
    },
}));

function App() {
    const classes = useStyles();
    return (
        <div className="App">
            <Router>
                <Header/>
                <div className={classes.root}>
                    <Switch>
                        <Route path="/journey">
                            <Journey/>
                        </Route>
                        <Route path="/pics">
                            <Pics/>
                        </Route>
                        <Route path="/cv">
                            <CV/>
                        </Route>
                        <Route path="/certs">
                            <Certs/>
                        </Route>
                        <Route path="/run">
                            <Run/>
                        </Route>
                        <Route path="/*">
                            <Home/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
