import { FC, useContext } from 'react';
import { RecordList } from '../../components/RecordList/RecordList';
import { NewRecord } from '../../components/NewRecord/NewRecord';
import { DataContext } from '../../state/data.context';

export const Home: FC = () => {
  const {data} = useContext(DataContext)
  return(
      <div className="new-record">
        <NewRecord />
        { !!data.length &&
            <>
              <h3>Latest records</h3>
              <RecordList limit={3} />
            </>
        }
      </div>
  )
}
