import { Reducer } from 'react';

export interface DndStateInterface {
  drag: {
    event: 'start' | 'stop' | null;
    value: string;
  };
  drop: {
    zone: string;
  };
  group: Record<string, string[]>;
}

export interface DndActionInterface {
  type: string;
  payload: any;
}

export const dndState: DndStateInterface = {
  drag: {
    event: null,
    value: ''
  },
  drop: {
    zone: ''
  },
  group: {}
};

export const reducer: Reducer<DndStateInterface, DndActionInterface> = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'dragStart':
      return {
        ...state,
        drag: { event: 'start', value: payload }
      };
    case 'dragOver':
      return {
        ...state,
        drop: { zone: payload }
      };
    case 'dragEnd':
      if (state.group[state.drop.zone].includes(state.drag.value)) {
        return state
      }
      return {
        ...state,
        drag: { event: 'stop', value: '' },
        drop: { zone: '' },
        group: {
          ...state.group,
          [state.drop.zone]: [...state.group[state.drop.zone], state.drag.value]
        }
      };
    case 'addGroup':
      const newGroupRecord: Record<string, string[]> = {};
      if (payload) {
        newGroupRecord[payload] = [];
      }
      return {
        ...state,
        group: {
          ...state.group,
          ...newGroupRecord
        }
      };
    case 'removeGroup':
      const newGroupList = { ...state.group };
      delete newGroupList[payload];
      return {
        ...state,
        group: newGroupList
      };
    case 'removeFromGroup':
      return {
        ...state,
        group: {
          ...state.group,
          [payload.group]: state.group[payload.group].filter(el => el !== payload.tag)
        }
      }
    default:
      return state;
  }
};
