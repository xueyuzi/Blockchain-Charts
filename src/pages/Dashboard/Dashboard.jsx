

import React, { Component } from 'react';
import { observer, inject } from "mobx-react"

@inject(stores => ({
  charts: stores.charts
}))
@observer
export default class DashBoard extends Component {
  static displayName = 'DashBoard';
  componentDidMount() {
    this.props.charts.init("main");
  }

  render() {
    return (
        <div id="main" style={{ width: 1000, height: 900 }}></div>
    );
  }
}
