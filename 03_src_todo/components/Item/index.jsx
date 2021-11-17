import React, { Component } from 'react';
import './index.css'

class Item extends Component {
    //标识鼠标移入移出
    state = { mouse: false }
    //移入移出的回调
    handleMouse = (flag) => {
        return () => {
            this.setState({ mouse: flag })
        }
    }
    //勾选改变
    handleCheck = (id) => {
        return (event) => {
            this.props.updateTodo(id, event.target.checked)

        }
    }
    //删除todo
    deletTodo = (id) => {
        return () => {
            if(window.confirm('do u want to delet?')) this.props.deletTodo(id)
            
        }
    }

    render() {
        const { id, name, done } = this.props
        return (
            <li style={{ backgroundColor: this.state.mouse ? '#ddd' : '' }} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
                    <span>{name}</span>
                </label>
                <button onClick={this.deletTodo(id)} className="btn btn-danger" style={{ display: this.state.mouse ? 'block' : 'none' }}>删除</button>
            </li>
        );
    }
}

export default Item;