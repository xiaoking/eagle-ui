import React, { Component ,PropTypes} from 'react';
import { Redirect, Router, Route } from 'react-router';
import History from 'history/lib/createHashHistory';

import Calendar from './modules/calendar.js';
import Button from './modules/button';
import Crumb from './modules/crumb';
import Demo1 from './modules/demo1';
import Demo2 from './modules/demo2';
import Dialog from './modules/dialog';
import Input from './modules/input';
import Label from './modules/label';
import Paging from './modules/paging';
import Panel from './modules/panel';
import Search from './modules/search';
import Select from './modules/select';
import Tab from './modules/tab';
import Table from './modules/table';
import Toast from './modules/toast';
import ToolTip from './modules/tooltip';
import Validate from './modules/validate';

//require('../less/public.less');
import css from '../../lib/_include.less';

let Index = class Index extends Component{
    render() {
        return (
            <div>

            </div>
        );
    }
};

let AppRouter = class AppRouter extends Component {
    constructor(props,context) {
        super(props,context);
        // Opt-out of persistent state, not recommended.
        this.history = new History({
            queryKey: false
        });

    }

    static defaultProps={

    };

    render() {
        return (
            <Router history={this.history}>
                <Route path="/index" name="index" component={Index} />
                <Route path="/Calendar" name="Calendar" component={Calendar} />
                <Route path="/Button" name="Button" component={Button} />
                <Route path="/Crumb" name="Crumb" component={Crumb} />
                <Route path="/Demo1" name="Demo1" component={Demo1} />
                <Route path="/Demo2" name="Demo2" component={Demo2} />
                <Route path="/Dialog" name="Dialog" component={Dialog} />
                <Route path="/Input" name="Input" component={Input} />
                <Route path="/Label" name="Label" component={Label} />
                <Route path="/Paging" name="Paging" component={Paging} />
                <Route path="/Panel" name="Panel" component={Panel} />
                <Route path="/Search" name="Search" component={Search} />
                <Route path="/Select" name="Select" component={Select} />
                <Route path="/Tab" name="Tab" component={Tab} />
                <Route path="/Table" name="Table" component={Table} />
                <Route path="/Toast" name="Toast" component={Toast} />
                <Route path="/ToolTip" name="ToolTip" component={ToolTip} />
                <Route path="/Validate" name="Validate" component={Validate} />
                <Redirect from="/" to="/index" />
            </Router>
        );
    }
}

React.render(
    <AppRouter />,
    document.getElementById('root')
);