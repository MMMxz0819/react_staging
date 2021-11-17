import React, { Component } from 'react';
import './index.css'

class Footer extends Component {

    //勾选全部
    checkAll = (event) => {
        this.props.checkAllTodo(event.target.checked);
    }
    //清除所有已经完成任务
    deletAllDone = () => {
        this.props.deletAllDoneTodo()
    }


    render() {
        const { todos } = this.props
        //计算已完成个数
        const done = todos.filter((todoObj) => { return todoObj.done === true }).length
        // const done = todos.reduce((pre,todoObj)=>{pre+(todoObj.done?1:0)},0)
        //总数
        const total = todos.length


        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={done === total && total !== 0 ? true : false} onChange={this.checkAll} />
                </label>
                <span>
                    <span>已完成{done}</span> / 全部{total}
                </span>
                <button onClick={this.deletAllDone} className="btn btn-danger">清除已完成任务</button>
            </div>
        );
    }
}

export default Footer;