import React, { Component } from 'react';

class TodoItem extends Component {

    delete(key) {
        this.props.delete(key);
    }

    // editItem = (key, value) => {
    //     this.props.edit(key, value);
    //     // const item = this.props
    //     // const list = item.item
    //     // const index = list.findIndex((item) => {
    //     //     return item.key === key
    //     // });
    //     // const tam = Object.assign({}, list[index]);
    //     // const todoItems = Object.assign({}, list);
    //     // todoItems[index] = {
    //     //     ...tam,
    //     //     text: value, 
    //     // }
    //     // this.setState({list: todoItems})
    //     // console.log('tạm', todoItems)
    //     // console.log('gốc', list)
    // }

    createTask = () => {
        const item = this.props
        const list = item.item
        if (list) {
            return list.map((item)=> {
                return  (
                    <div>
                        <li key={item.key}>
                            <input onChange={(e) => this.props.editItem(item.key, e.target.value)} defaultValue={item.text}/>
                        </li>
                        <button onClick={() => this.delete(item.key)} className="delete">Delete</button>
                    </div>
                )}
                );}
    }

    render() {
        return (
            <div>
            <ul className="theList">{this.createTask()}</ul>
            </div>
        );
    }
}

export default TodoItem;