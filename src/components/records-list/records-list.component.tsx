import { FC, useContext } from 'react';
import { RecordComponent } from '../record/record.component';
import { DataContext } from '../../state/data.context';

export const RecordsListComponent: FC<{ limit?: number }> = (props) => {
  const {limit} = props;
  const {data} = useContext(DataContext)

  const records = [...data].reverse()

  return (
      <div className="records">
        { limit
            ? records.slice(0, limit).map(record => (
                <RecordComponent key={ record.id } { ...record } />
            ))
            : records.map(record => (
                <RecordComponent key={ record.id } { ...record } />
            ))
        }
      </div>
  );
};
