import { Fragment } from 'react';
import { Component } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';
import UsersContext from '../store/users-context';
import ErrorBoundary from './ErrorBoundary';


class UserFinder extends Component {
    static contextType = UsersContext;
    constructor() {
        super();
        this.state = {
            filteredUsers: [],
            searchTerm: ''
        };
    }

    componentDidMount() {
        this.setState({ filteredUsers: this.context.users });

    }
    searchChangeHandler = (event) => {
        this.setState({ searchTerm: event.target.value });
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchTerm !== this.state.searchTerm) {
            this.setState({ filteredUsers: this.state.filteredUsers.filter((user) => user.name.includes(this.state.searchTerm)) })
        }
    }
    render() {
        return (
            <Fragment>
                <div className={classes.finder}>
                    <input type='search' onChange={this.searchChangeHandler.bind(this)} />
                </div>
                <ErrorBoundary>
                    <Users users={this.state.filteredUsers} />
                </ErrorBoundary>
            </Fragment>
        )
    }
}


export default UserFinder;