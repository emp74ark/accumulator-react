import { FC, useState } from 'react';
import { EventRecord } from '../../interfaces';
import { GroupPieChart } from './GroupPieChart';
import { GroupLineChart } from './GroupLineChart';

interface GroupChartInterface {
  label: string;
  data: EventRecord[];
  tags: string[];
}

export const GroupChart: FC<GroupChartInterface> = (props) => {
  const { label, tags, data } = props;
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
