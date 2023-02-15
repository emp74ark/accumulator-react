import { FC } from 'react';
import { EventRecord } from '../../interfaces';

export const RecordComponent: FC<EventRecord> = (record) => {
  return(
      <div className="record">
        <span>{record.date.slice(0,10)}</span>
        <span>{record.content}</span>
        <span>
          {record.tag.map(tag => (
              <span>{ tag }</span>
          ))}
        </span>
      </div>
  )
}
