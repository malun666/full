import React, { Component } from 'react';
import { connect } from 'react-redux';

import { NumActionCreators } from '../actions/NumAction';

// 把容器组件的状态映射到UI组件的props里面去。  state是redux里面的状态数据。
function mapStateToProps(state) {
  return {
    WebSite: 'aicoder.com',
    Num: state.Num
  };
}

// dispatch 是redux中的分发action的api函数。
// 事件逻辑都是放在这里，映射给UI组件的方法。
function mapDispatchToProps(dispatch) {
  return {
    addNum(num) {
      dispatch(NumActionCreators.AddActionCreator(num));
    },
    minusNum(num) {
      dispatch(NumActionCreators.MinusActionCreator(num));
    }
  };
}

// UI 组件负责展示逻辑和事件绑定
class NewCount extends Component {
  render() {
    return (
      <div>
        <p>
          这是来自我们自己的状态： { this.props.WebSite }
        </p>
        <p>
          拿到Redux里面的数据状态： { this.props.Num }
        </p>
        <button
          onClick={ () => this.props.addNum(1) }
        >+1</button>
        <button
          onClick={ () => this.props.minusNum(1) }
        >-1</button>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCount);