import { observable, action } from "mobx";
import echarts from 'echarts/lib/echarts';

import 'echarts/lib/chart/line';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';


class Charts {
    option = {
        title: {
          text: '人生的大起大落'
        },
        tooltip: {
          trigger: 'axis',
          formatter: function (params) {
            params = params[0];
            var date = new Date(params.name);
            return date.getTime() + ' : ' + params.value[1];
          },
          axisPointer: {
            animation: false
          }
        },
        xAxis: {
          type: 'time',
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          // boundaryGap: [0, '100%'],
          min:"dataMin",
          max:"dataMax",
          splitLine: {
            show: false
          }
        },
        series: [{
          name: '模拟数据',
          type: 'line',
          showSymbol: false,
          hoverAnimation: false,
          data: []
        }]
      };
    chartsData = [];

    container;
    ws;

    @action init(id) {
        this.container = echarts.init(document.getElementById(id))
        this.container.setOption(this.option)
        this.ws = new WebSocket('wss://stream.binance.com:9443/ws/eosusdt@aggTrade');
        this.ws.onmessage = this.realTimeSetPrice;
    }

    @action handleData(value) {
        let now = new Date();
        return {
            name: now.toString(),
            value: [
                [now.getTime()],
                value
            ]
        }
    }

    @action realTimeSetPrice = (m) => {
        let data = JSON.parse(m.data);
        let price = data.p;
        this.chartsData.push(this.handleData(price));
        this.container.setOption({series:[{data:this.chartsData}]})
    }
}
const self = new Charts();
export default self;