import React, { Component } from 'react'
import './index.scss'

class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0
    };
  }

  handleClick(index) {
    this.setState({active: index})
  };

  render() {
    const { items } = this.props;
    const { active } = this.state;

    return (
      <div className="mb20 text-center">
        <ul className="root">
          {items.map((item, index) =>
            <li
              key={index}
              className={active == index ? 'activeTab': 'normal'}
              onClick={this.handleClick.bind(this, index)}
            >
              {item}
            </li>
          )}
        </ul>
        <p className="pt20 mb2s0">当前选择是：{items[this.state.active]}</p>

      </div>
    )
  }
}

export default Tab