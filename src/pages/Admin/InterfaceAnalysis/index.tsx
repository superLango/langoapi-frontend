import { PageContainer } from '@ant-design/pro-components';
import '@umijs/max';
import ReactECharts from 'echarts-for-react';
import React, {useEffect, useState} from 'react';
import {listTopInvokeInterfaceInfoUsingGET} from "@/services/langoapi-backend/analysisController";

/**
 * 接口分析
 * @constructor
 */
const InterfaceAnalysis: React.FC = () => {

  const [data,setData] = useState<API.InterfaceInfoVO[]>([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    try {
      listTopInvokeInterfaceInfoUsingGET().then(res => {
        if (res.data){
          setData(res.data);
        }
      })
    }catch (e: any){

    }
  },[])

  // 映射
  const chartData = data.map(item => {
    return {
      value: item.totalNum,
      name: item.name,
    }
  })

  const option = {
    title: {
      text: '用户调用次数最多的接口',
      subtext: '接口调用图',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
    },
    series: [
      {
        name: '接口名称/总调用次数',
        type: 'pie',
        radius: '50%',
        data: chartData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };
  return (
    <PageContainer>
      <ReactECharts loadingOption={{
        showLoading: loading
      }} option={option} />
    </PageContainer>
  );
};
export default InterfaceAnalysis;
