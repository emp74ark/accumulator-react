import { FC, useState } from 'react';
import { EventRecord } from '../../interfaces';
import { GroupPieChart } from './GroupPieChart';
import { GroupLineChart } from './GroupLineChart';

interface GroupChartInterface {
  id: number
  label: string;
  data: EventRecord[];
  tags: string[];
  onRemove: (id: number) => void;
}

export const GroupChart: FC<GroupChartInterface> = (props) => {
  const { id, label, tags, data, onRemove } = props;
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
            <GroupPieChart label={ label } data={ data } width={ 300 } height={ 200 } tags={ tags }/>
        }
        {
            type === 'bar' &&
            <GroupLineChart data={ data } width={ 300 } height={ 200 } tags={ tags } label={ label }/>
        }
      </div>
  );
};
