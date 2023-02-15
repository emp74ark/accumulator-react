import { createContext } from 'react';
import { EventRecord } from '../interfaces';
export const DataContext = createContext({data: [] as EventRecord[], add: (record: EventRecord) => {}})
DataContext.displayName = 'Global data context'
