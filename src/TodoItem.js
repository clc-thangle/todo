import React, { Component } from 'react';

class TodoItem extends Component {

    createTask = item => {
        return(
            <li key={item.key}>
                {item.text}
            </li>
        )
    }

    render() {
    const listItems = this.props.entris.map(this.createTask);
        return (
            <ul className="theList">{listItems}</ul>
        );
    }
}

export default TodoItem;