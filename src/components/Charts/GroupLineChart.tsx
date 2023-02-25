import { EventRecord } from '../../interfaces';
import { FC } from 'react';
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import uniqolor from 'uniqolor';

interface GroupLineChartInterface {
  data: EventRecord[];
  width: number;
  height: number;
  tags: string[];
}

export const GroupLineChart: FC<GroupLineChartInterface> = (props) => {
  const { data, width, height, tags } = props;

  const dataPerTag: Record<string, EventRecord[]> = {};

  tags.forEach(tag => {
    dataPerTag[tag] = [];
    data.forEach(record => {
      if (record.tag.includes(tag)) dataPerTag[tag].push(record);
    });
  });

  const uniqDates = new Set<string>()
  data.filter(({tag}) => tag.some(el => tags.includes(el))).forEach(({ date }) => uniqDates.add(date))

  const chartDataObject: Record<string, Record<string, number>> = {}

  uniqDates.forEach(uniqDate => {
    chartDataObject[uniqDate] = {}
    for (let tag of tags) {
      dataPerTag[tag].forEach(record => {
        if (record.date === uniqDate && chartDataObject[uniqDate][tag]) {
          chartDataObject[uniqDate][tag] += record.amount
        }
        else if (record.date === uniqDate) {
          chartDataObject[uniqDate][tag] = record.amount
        }
      })
    }
  })

  const chartData: Record<string, any>[] = []
  Object.entries(chartDataObject).forEach(([name, data]) => {
    chartData.push({name, ...data})
  })

  return (
      <>
        <BarChart width={width} height={height} data={chartData}>
          <XAxis dataKey={'name'}/>
          <YAxis/>
          <Tooltip/>
          <Legend/>
          {
            tags.map(tag => (
                <Bar key={tag} dataKey={tag} fill={uniqolor.random().color}/>
            ))
          }
        </BarChart>
      </>
  );
};
