import React ,{Component} from  'react'
// 引入柱状图
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
import  'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/markLine';
//柱状图
class  EchartsColumnar extends Component{
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        //创建一个 ECharts 实例，返回 echartsInstance，不能在单个容器上初始化多个 ECharts 实例。 
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        myChart.setOption({
            //提示框组件
            tooltip: {
                //触发类型
                trigger: 'axis',//坐标轴触发
                //坐标轴指示器配置项
                axisPointer: {
                    type: 'cross', // 
                    crossStyle: {
                        color: '#999'
                    }
                }
            },
            //工具栏。内置有导出图片，数据视图，动态类型切换，数据区域缩放，重置五个工具。
            toolbox: {
                //各工具配置项。
                feature: {
                    dataView: {show: true, readOnly: false},//数据统计
                    magicType: {show: true, type: ['line', 'bar']},//显示类型
                    restore: {show: true},//恢复状态
                    saveAsImage: {show: true}//下载图片
                }
            },
            //图例组件展现了不同系列的标记(symbol)，颜色和名字。可以通过点击图例控制哪些系列不显示。
            legend: {
                data: ['蒸发量', '降水量', '平均温度']
            },
            //x轴
            xAxis: [
                {
                    type: 'category',// 坐标轴类型 category离散数据
                    // x轴数据
                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                    //点击现实效果
                    axisPointer: {
                        type: 'shadow'
                    }
                }
            ],
            //y轴
            yAxis: [
                {
                    type: 'value',
                    name: '水量',
                    min: 0,
                    max: 250,
                    interval: 50,
                    //坐标轴刻度
                    axisLabel: {
                        formatter: '{value} ml' //刻度标签的内容格式器，支持字符串模板和回调函数两种形式。
                    }
                },
                {
                    type: 'value',
                    name: '温度',
                    min: 0,
                    max: 25,
                    interval: 5,
                    axisLabel: {
                        formatter: '{value} °C'
                    }
                }
            ],
            //数据
            series: [
                {
                    name: '蒸发量',
                    type: 'bar',
                    data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                },
                {
                    name: '降水量',
                    type: 'bar',
                    data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                },
                {
                    name: '平均温度',
                    type: 'line',
                    yAxisIndex: 1,
                    data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
                }
            ]
        });
    }
    render() {
        return (
            <div id="main" style={{ width: 400, height: 400 }}></div>
        );
    }
}
export default EchartsColumnar


