import { FC } from 'react';
import { records } from './records.props'
import { RecordComponent } from '../../components/record/record.component';

export const RecordsComponent: FC = () => {
  return(
      <>
        <h2>Records</h2>
        <div className="records">
          {records.map(record => (
              <RecordComponent key={record.id} {...record} />
          ))}
        </div>
      </>
  )
}
