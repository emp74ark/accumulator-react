import { FC, useContext } from 'react';
import { EventRecord } from '../../interfaces';
import { DataContext } from '../../state/data.context';

export const RecordComponent: FC<EventRecord> = (record) => {
  const {remove} = useContext(DataContext)
  return(
      <div className="record">
        <span className="record__date">{record.date.slice(0,10)}</span>
        <span className="record__content">{record.content}</span>
        <span className="record__amount">{record.amount}</span>
        <div className="record__tags">
          {record.tag.map((tag, index) => (
              <span key={index} className="record__tag">{ tag }</span>
          ))}
        </div>
        <div className="record__actions">
          <span onClick={() => remove(record)}>remove</span>
        </div>
      </div>
  )
}
