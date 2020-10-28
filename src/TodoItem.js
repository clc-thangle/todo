import React, { Component } from 'react';

class TodoItem extends Component {    

    delete(key) {
        this.props.delete(key);
    }

    createTask = item => {
        return(
            <div>
            <input key={item.key}>
                {item.text}
            </input>
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