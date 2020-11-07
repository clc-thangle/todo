import React, { Component } from 'react';
import { Button, notification, Input } from 'antd';
import Noti from './Noti';
class TodoItem extends Component {

    delete(key) {
        this.props.delete(key);
    }

    openNoti() {
        Noti.success('Edit success');
    }

    createTask = () => {

        const item = this.props
        const list = item.item
        if (list) {
            return list.map((item) => {
                return (
                    <div className="mainItem">
                        <li key={item.key}>
                            <Input onChange={(e) => this.props.editItem(item.key, e.target.value)} defaultValue={item.text} />
                        </li>
                        
                        <Button onClick={() => this.delete(item.key)} className="delete">Delete</Button>
                        {this.props.isShow && <Button className="edit" onClick={this.openNoti}>Confirm</Button>}
                    </div>
                )
            }
            );
        }
    }

    render() {
        return (
            <div className="mainList">
                <ul className="theList">{this.createTask()}</ul>
            </div>
        );
    }
}

export default TodoItem;