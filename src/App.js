import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {InputContext} from "./hooks/InputContext";
import {InputValue} from "./hooks/InputValue";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import {Navbar} from "./components/Navbar";
import Alert from "./components/Alert";
import {AlertState} from "./context/alert/AlertState";
import {GithubState} from "./context/github/GithubState";



function App() {
    const stateInput = InputValue();

    return (
        <InputContext.Provider value={{stateInput}}>
            <GithubState>
                <AlertState>
                    <BrowserRouter>
                        <Navbar/>
                        <div className={"container pt-4"}>
                            <Alert
                                alert={
                                    {
                                        text: "Test alert",
                                        type: "success"
                                    }
                                }
                            />
                            <Switch>
                                <Route path="/" exact component={Home}/>
                                <Route path="/about" component={About}/>
                                <Route path="/profile/:name" component={Profile}/>
                            </Switch>
                        </div>
                    </BrowserRouter>
                </AlertState>
            </GithubState>
        </InputContext.Provider>
    );
}

export default App;
