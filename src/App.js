import React, {Component} from 'react';
import Table from './Table';
import Form from './Form';
class App extends Component{
  state = {
    users: []
  };
  removeUser = index => {
        const { users } = this.state;

        this.setState({
            users: users.filter((user, i) => {
                return i !== index;
            })
        });
}
  handleSubmit = user => {
       this.setState({users: [...this.state.users, user]});
   }
   render() {
    const { users } = this.state;

    return (
        <div className="container">
            <div className="header">
                <h1>Phone Directory</h1>
            </div>
            <div className="hline"></div>
            <div className="add">
                <h3>Add Subscriber</h3>
                <Form handleSubmit={this.handleSubmit} />
            </div>
            <div className="hline"></div>
            <h3>Database</h3>
            <Table
                userData={users}
                removeUser={this.removeUser}
            />
        </div>
    );
}
}

export default App;
