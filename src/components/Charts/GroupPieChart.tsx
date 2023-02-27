import { EventRecord } from '../../interfaces';
import { FC } from 'react';
import { Cell, LabelList, Pie, PieChart, Tooltip } from 'recharts';
import uniqolor from 'uniqolor';

interface GroupPieChartInterface {
  data: EventRecord[]
  width: number;
  height: number;
  tags: string[];
  label: string;
}
export const GroupPieChart: FC<GroupPieChartInterface> = (props) => {
  const {data, width, height, tags} = props;
  const amountPerTag: Record<string, number> = {}

  tags.forEach(tag => {
    data.filter(el => {
      if (el.tag.includes(tag) && amountPerTag[tag]){
        amountPerTag[tag] += el.amount
      }
      else if (el.tag.includes(tag)) {
        amountPerTag[tag] = el.amount
      }
    })
  })

  const chartData: {tag: string, amount: number}[] = []

  Object.entries(amountPerTag).forEach(([tag, amount]) => {
    chartData.push({tag, amount})
  })

  return (
      <PieChart width={width} height={height}>
        <Pie
            data={chartData}
            dataKey='amount'
            nameKey='tag'
            outerRadius={60}
            cx={'50%'}
            cy={'50%'}
        >
          {
            data.map((entry, index) => (
                <Cell key={`call-${index}`} fill={uniqolor(entry.content).color}/>
            ))
          }
          <LabelList dataKey={'tag'} position={'outside'} stroke={uniqolor.random().color}/>
        </Pie>
        <Tooltip />
      </PieChart>
  );
};
