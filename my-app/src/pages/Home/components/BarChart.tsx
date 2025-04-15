import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

type EChartsOption = echarts.EChartsOption;
const BarChart = ({title}: any) => {
     const chartRet = useRef(null)
    
    // 保证拿到dom后，开始渲染echarts
    useEffect(() => {
        // 1.获取要渲染的 DOM 容器元素
        // const chartDom = document.getElementById('main')!;
        const chartDom = chartRet.current;
        // 2.初始化 echarts 实例
        const myChart = echarts.init(chartDom);
        // 3.指定图表的配置项和数据
        const option: EChartsOption = {
            title: {
                text: title
            },
            xAxis: {
                type: 'category',
                data: ['Vue', 'React', 'Angular']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                data: [10, 40, 70],
                type: 'bar'
                }
            ]
        };

        // 4.使用刚指定的配置项和数据显示图表。
        option && myChart.setOption(option);

    }, [])
    
    return (
        <>
            <div ref={chartRet} id='main' style={{width:'500px', height:'400px'}}>

            </div>
        </>
    )
}



export default BarChart