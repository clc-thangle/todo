import React, {useState} from 'react'
import {useForm} from 'react-hook-form';
import PropTypes from 'prop-types';
export default function TodoList({addItem}) {

    const { register, handleSubmit, errors} = useForm();
    const [taskName, setTittle] = useState('');
    const onSubmit = () => {
        if((!taskName) || (taskName ==='')) return;
        addItem(taskName);
        setTittle('');
    }
    // handleInput = e => {
    //     e.preventDefault()
    //     const taskName = this.refs.taskInput.value;
    //     this.props.addItem(taskName);

    //     // reset and focus again on input form
    //     this.refs.taskInput.value = ''
    //     this.refs.taskInput.focus()
    //     console.log(taskName);
    // }
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" value={taskName} onChange={(e) => setTittle(e.target.value)} name="task" placeholder="Task" ref={register}/>
                        <button type="submit"> *Add Task*</button>
                    </form>
                </div>
            </div>
        );    
}

TodoList.protoTypes = {
    addItem: PropTypes.func
}


