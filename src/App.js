import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoList from './TodoList';
import { Button, notification } from 'antd';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: [],
            newItem: []
        }
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.edit = this.edit.bind(this);
    }

    addItem = (taskName) => {
        const newTask = {
            text: taskName,
            key: Date.now()
        }
        if (taskName !== null && taskName !== '') {
            // const item = [...this.state.item, newTask]
            this.setState(state => {
                return {
                    item: [...state.item, newTask]
                }
            })
        }
    }

    deleteItem(key) {
        var filteredItems = this.state.item.filter(function (items) {
            return (items.key !== key);
        });
        this.setState({
            item: filteredItems
        });
    }

    edit = (key, value) => {
        const list = this.state.item;
        const index = list.findIndex((a) => {
            return a.key === key
        });
        console.log(index);
        const tam = Object.assign({}, list[index]);
        const newItem = Object.assign({}, list);
        newItem[index] = {
            ...tam,
            text: value, 
        }
        this.setState({list: newItem})
        console.log('tạm', newItem)
        
    }

    componentDidUpdate() {
        const openNotification = () => {
            notification.open({
              message: 'Notification Title',
              description:
                'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
              onClick: () => {
                console.log('Notification Clicked!');
              },
            });
          };
    }
    
    
    render() {
        
        return (
            <div>
                <TodoList addItem={this.addItem} />
                <TodoItem item={this.state.item} delete={this.deleteItem} editItem={this.edit} />
            </div>
        );
    }
}
export default App;