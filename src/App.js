import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoList from './TodoList';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: [],
            newItem: []
        }
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem = (taskName) => {
        const newTask = {
            text: taskName,
            key: Date.now()
        }
        if (taskName !== null && taskName !== '') {
            const item = [...this.state.item, newTask]
            this.setState(state => {
                return {
                    item: [...state.item, newTask]
                }
            })
            console.log(item);
        }
    }

    editItem = (key, value) => {
        const index = this.state.item.findIndex((mang) => {
            return mang.key = key;
        });
        const tam = Object.assign({}, this.state.item[index]);
        const todoItems = Object.assign({}, this.state.item);
        todoItems[index] = {
            ...tam,
            text: value 
        }
        this.setState({todoItems})
    }

    deleteItem(key) {
        var filteredItems = this.state.item.filter(function (items) {
            return (items.key !== key);
        });

        this.setState({
            item: filteredItems
        });
    }

    render() {
        return (
            <div>
                <TodoList addItem={this.addItem} />
                <TodoItem editItem={(key,value) => this.editItem(key,value)} entris={this.state.item} delete={this.deleteItem} />
            </div>
        );
    }
}
export default App;