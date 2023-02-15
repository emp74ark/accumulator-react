import { FC, useContext } from 'react';
import { RecordsListComponent } from '../../components/records-list/records-list.component';
import { NewRecordComponent } from '../../components/new-record/new-record.component';
import { DataContext } from '../../state/data.context';

export const HomeComponent: FC = () => {
  const {data} = useContext(DataContext)
  return(
      <div className="new-record">
        <NewRecordComponent />
        { !!data.length &&
            <>
              <h3>Latest records</h3>
              <RecordsListComponent limit={3} />
            </>
        }
      </div>
  )
}
