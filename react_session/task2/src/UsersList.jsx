import React, { Component } from 'react';
import User from './User';
import Pagination from './Pagination';

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      itemPerPage: 3,
    };
  }

  goPrev = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  };
  goNext = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  };
  render() {
    const { users } = this.props;
    const { currentPage, itemPerPage } = this.state;

    const start = (currentPage - 1) * itemPerPage;
    const usersToDispaly = users.slice(start, start + itemPerPage);

    return (
      <div>
        <Pagination
          goPrev={this.goPrev}
          goNext={this.goNext}
          currentPage={currentPage}
          totalItems={users.length}
          itemPerPage={itemPerPage}
        />
        <ul className="users">
          {usersToDispaly.map(user => (
            <User key={user.id} name={user.name} age={user.age} />
          ))}
        </ul>
      </div>
    );
  }
}
export default UsersList;
