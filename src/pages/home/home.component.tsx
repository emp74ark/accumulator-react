import { FC } from 'react';
import { RecordsListComponent } from '../../components/records-list/records-list.component';
import { NewRecordComponent } from '../../components/new-record/new-record.component';

export const HomeComponent: FC = () => {
  return(
      <div className="new-record">
        <NewRecordComponent />
        <RecordsListComponent limit={3} />
      </div>
  )
}
