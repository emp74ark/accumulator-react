import { FC, useState } from 'react';
import { EventRecord } from '../../interfaces';
import { TagPieChart } from './TagPieChart';
import { TagBarChart } from './TagLBarChart';

interface SingleChartInterface {
  id: number
  label: string;
  data: EventRecord[];
  tag: string;
  onRemove: (id: number) => void;
}

export const SingleChart: FC<SingleChartInterface> = (props) => {
  const { id, label, tag, data, onRemove } = props;
  const [type, setType] = useState<string>('pie');
  const onChangeType = () => {
    const newType = type === 'pie' ? 'bar' : 'pie';
    setType(newType);
  };
  return (
      <div className={ 'chart' }>
        <div className="chart__header">
          <h3>{ label }</h3>
          <button onClick={ onChangeType }>type</button>
          <button onClick={() => onRemove(id)}>remove</button>
        </div>
          {
              type === 'pie' &&
              <TagPieChart label={ label } data={ data } width={ 300 } height={ 200 } tag={ tag }/>
          }
          {
              type === 'bar' &&
              <TagBarChart data={ data } width={ 300 } height={ 200 } tag={ tag } label={ label }/>
          }
      </div>
  );
};
