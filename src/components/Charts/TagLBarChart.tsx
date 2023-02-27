import { FC } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';
import { EventRecord } from '../../interfaces';
import uniqolor from 'uniqolor';

interface TagBarChartInterface {
  data: EventRecord[];
  width: number;
  height: number;
  tag: string;
  label: string;
}

export const TagBarChart: FC<TagBarChartInterface> = (props) => {
  const { data, tag, width, height } = props;

  const filteredData = data.filter(entry => entry.tag.includes(tag));

  const uniqDates = new Set<string>();
  filteredData.forEach(record => uniqDates.add(record.date));

  const amountPerDate: Record<string, number> = {};

  filteredData.forEach(({ date, amount }) => {
    if (amountPerDate[date]) {
      amountPerDate[date] += amount;
    } else {
      amountPerDate[date] = amount;
    }
  });

  const chartData: { date: string, amount: number }[] = [];

  Object.entries(amountPerDate).forEach(([date, amount]) => {
    chartData.push({ date, amount });
  });

  return (
      <BarChart width={ width } height={ height } data={ chartData }>
        <XAxis dataKey={ 'date' }/>
        <YAxis/>
        <Tooltip/>
        <Bar dataKey={ 'amount' } type={ 'monotone' } fill={ uniqolor.random().color }/>
      </BarChart>
  );
};
