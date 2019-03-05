import React, { Component } from 'react'
import store, { ActionCreators } from '../store';
class Count extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      Num: store.getState()  // 从redux中的state中拿到num数据
    }

    // 当store里面的state发生改变的时候，会自动触发绑定函数执行。
    store.subscribe(() => {
      this.setState({
        Num: store.getState()
      })
    });
  }

  addNum = () => {
    // 通过store触发一个 加1的action
    store.dispatch(ActionCreators.AddActionCreator(1))
  }

  minusNum = () => {
    store.dispatch(ActionCreators.MinusActionCreator(1));
  }

  replaceNum = () => {
    store.dispatch(ActionCreators.ReplaceActionCreator(Date.now()));
  }
  
  render () {
    return (
      <div>
        <h3>store中的num数据是： { this.state.Num } </h3>
        <hr/>
        <input
          onClick={ this.addNum }
          className="button is-info"
          type="button" value="+1"/>
        <input
          onClick={ this.minusNum }
          className="button is-danger"
          type="button" value="-1"/>
        <input
          onClick={ this.replaceNum }
          className="button is-info"
          type="button" value="替换值"/>
      </div>
    )
  }
}

export default Count