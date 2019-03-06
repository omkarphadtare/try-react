import React, {Component} from 'react';

const TableHeader = () => {
  return(
     <thead>
        <tr>
            <th>Name</th>
            <th>Contact Number</th>
            <th>Delete</th>
        </tr>
     </thead>
  );
}

const TableBody = props => {
  const rows = props.userData.map((row, index) => {
    return(
      <tr key = {index}>
          <td>{row.name}</td>
          <td>{row.number}</td>
          <td><button onClick={() => props.removeUser(index)}>Delete</button></td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
}

class Table extends Component{
  render(){
    const {userData, removeUser} = this.props;
    return(
      <div className = "tab">
          <table>
            <TableHeader />
            <TableBody
                userData = {userData}
                removeUser = {removeUser}
            />
          </table>
      </div>
    );
  }
}

export default Table;
