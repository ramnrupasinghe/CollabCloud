import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ChatPage from './pages/ChatPage';
import FileSharingPage from './pages/FileSharingPage';
import TaskBoardPage from './pages/TaskBoardPage';
import './styles/index.css';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/chat" component={ChatPage} />
                    <Route path="/files" component={FileSharingPage} />
                    <Route path="/tasks" component={TaskBoardPage} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
