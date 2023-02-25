import { FC } from 'react';
import { Cell, LabelList, Pie, PieChart, Tooltip } from 'recharts';
import { EventRecord } from '../../interfaces';
import uniqolor from 'uniqolor';

interface TagPieChartInterface {
  data: EventRecord[]
  width: number;
  height: number;
  tag: string;
}
export const TagPieChart: FC<TagPieChartInterface> = (props) => {
  const {data, tag, width, height} = props;

  const charData = data.filter(entry => entry.tag.includes(tag))

  return (
      <>
        <PieChart width={width} height={height}>
          <Pie
              data={charData}
              dataKey='amount'
              nameKey='content'
              outerRadius={60}
              cx={'50%'}
              cy={'50%'}
          >
          {
            data.map((entry, index) => (
                <Cell key={`call-${index}`} fill={uniqolor(entry.content).color}/>
            ))
          }
          <LabelList dataKey={'content'} position={'outside'} stroke={uniqolor.random().color}/>
          </Pie>
          <Tooltip/>
        </PieChart>
      </>
  );
};
