import React, { Component } from 'react';

class FetchData extends Component {
  render() {
    let className = 'Button';

    if (this.props.type === 'gray') {
      className = 'Button Button--gray';
    }

    if (this.props.type === 'primary') {
      className = 'Button Button--primary';
    }

    return (
      <div className={className} onClick={this.props.onClick}>
        {this.props.children}
      </div>
    );
  }
}

export default FetchData;