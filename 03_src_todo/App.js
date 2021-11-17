import './App.css';
import React from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer';


class App extends React.Component {
  //状态在哪里，操作状态的方法就在哪里
  state = {
    todos: [
      { id: '001', name: '吃饭', done: false },
      { id: '002', name: '睡觉', done: false },
      { id: '003', name: '玩手机', done: true }
    ]
  }


  //添加一条todo
  addTodo = (todoObj) => {
    //获取原来的todo
    const { todos } = this.state
    //追加
    const newTodos = [todoObj, ...todos]
    this.setState({ todos: newTodos })
  }

  //更改一个todo
  updateTodo = (id, done) => {
    //获取状态的todos
    const { todos } = this.state
    //加工匹配数据
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) return { ...todoObj, done: done }
      else return todoObj
    })

    this.setState({ todos: newTodos })
  }

  //删除todo
  deletTodo = (id) => {
    const { todos } = this.state
    //删除指定id的对象
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id
    })
    this.setState({ todos: newTodos })
  }

  //全选
  checkAllTodo = (done) => {
    const { todos } = this.state
    const newTodos = todos.map((todoObj) => {
      return { ...todoObj, done }
    })
    this.setState({ todos: newTodos })
  }

  //清除所有完成
  deletAllDoneTodo = () => {
    const { todos } = this.state
    const newTodos = todos.filter((todoObj) => { return todoObj.done === false })
    this.setState({ todos: newTodos })
  }

  render() {
    return (
      <div>
        <div className="todo-container">
          <div className="todo-wrap">
            <Header addTodo={this.addTodo} />

            <List todos={this.state.todos} updateTodo={this.updateTodo} deletTodo={this.deletTodo} />

            <Footer todos={this.state.todos} checkAllTodo={this.checkAllTodo} deletAllDoneTodo={this.deletAllDoneTodo} />

          </div>
        </div>
      </div>
    )
  }
}

export default App;
