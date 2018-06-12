

import React, { Component } from 'react';

import UserLogin from './components/UserLogin';

import './Login.scss';
import { observable, action } from "mobx";
import { observer, inject } from "mobx-react"
// 引入 ECharts 主模块


@inject(stores => ({
  charts: stores.charts
}))
@observer
export default class Login extends Component {
  static displayName = 'Login';

  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.charts.init("main");
  }

  render() {
    const { router } = this.props;
    return (
      <div className="login-page">
        {/* <UserLogin {...router} /> */}
        <div id="main" style={{ width: 1000, height: 900 }}></div>
      </div>
    );
  }
}
