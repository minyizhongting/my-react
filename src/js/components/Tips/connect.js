import React, { Component } from 'React'
import PropTypes from 'prop-types'

// 高阶组件从context取数据，把数据通过props传给Dumb组件，起名字叫connect

// connect函数接受一个组件WrappedComponent作为参数，将这个组件包含在一个新的组件Connect里面。Connect会去context中取store。把store里的数据取出来通过props传给WrappedComponent。

// 每个传进去的组件需要store里的数据也不一样，因此除了给高阶组件传Dumb组件以外，还需要告诉高阶组件需要什么数据，因此给高阶组件传入mapStateToProps函数

// connect还需要给它传入另一个参数，来告诉它我们的组件需要如何触发dispatch，这个参数叫mapDispatchToProps

// 从store中取出需要的数据
const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor,
    themeName: state.themeName
  }
};

// 改变内部state的唯一方法是dispatch一个action
// 可以在返回的对象内部定义一些函数，这些函数会用到dispatch来触发特定action
const mapDispatchToProps = (dispatch) => {
  return {
    onSwitchColor: (color) => {
      dispatch({type: 'CHANGE_COLOR', themeColor: color});
    }
  }
};

export connect = (mapStateToProps, mapDispatchToProps) =>  (WrappedComponent) => {
  class Connect extends Component {
    static contextTypes = {
      store: PropTypes.object
    };

    constructor(props) {
      super(props);
      this.state = { allProps: {} };
    }
    // 监听数据变化然后重新渲染
    componentWillMount() {
      const { store } = this.context;
      this._updateProps();
      store.subscribe(() => this._updateProps());
    }

    _updateProps() {
      const { store } = this.context;
      let stateProps = mapStateToProps ? mapStateToProps(store.getState(), this.props) : {};
      let dispatchProps = mapDispatchToProps ? mapDispatchToProps(store.dispatch, this.props) : {};
      this.setState({
        ...stateProps,
        ...dispatchProps,
        ...this.props
      })
    }

    render() {

      // {...obj}即把这个对象里面的属性全部通过props方式传递进去
      return <WrappedComponent {...this.state.allProps} />
    }
  }

  return Connect
}

export default connect(mapStateToProps, mapDispatchToProps)(WrappedComponent)

// 容器组件就是使用store.subscribe()从Redux state树中读取部分数据，并通过props来吧这些数据提供给要渲染的组件。