import { FC } from 'react';
import { RecordsListComponent } from '../../components/records-list/records-list.component';

export const RecordsComponent: FC = () => {
  return(
      <>
        <h2>Records</h2>
        <RecordsListComponent />
      </>
  )
}
