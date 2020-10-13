import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoList from './TodoList';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item : []
        } 
    }
    
    addItem = (taskName) => {
        const newTask = {
            text : taskName,
            key : Date.now()
        }
        if( taskName !== null && taskName !=='')
        {
            const item = [...this.state.item,newTask]
            this.setState( state => {
                return{
                    item: [...state.item,newTask]
                }
            })
        }
    }

    render() {
        return (
            <div>
                <TodoList addItem={this.addItem}/>
                <TodoItem entris={this.state.item}/>
            </div>
        );
    }
}
export default App;