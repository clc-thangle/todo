import React, { Component } from 'react';

class TodoItem extends Component {

    delete(key) {
        this.props.delete(key);
    }

    createTask = item => {
        return (
            <div>
                <li key={item.key}>
                    <input onChange={() => this.props.editItem(item.key)} value={item.text}>
                        
                    </input>
                </li>
                <button onClick={() => this.delete(item.key)} className="delete">Delete</button>
            </div>

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