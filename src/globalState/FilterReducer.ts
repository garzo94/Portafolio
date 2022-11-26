import {Reducer} from 'react'

export enum FilterActionKind{
    FILTER_APP = 'FILTER_APP',
    LOADING = 'LOADING',
}


interface filterActions {
    type: FilterActionKind,
    payload:string
}

interface State {
    filterType:string
    getFilterType:(value:string)=>void
    loading:boolean
    Loading:()=>void

}
export const initialState:State = {
    filterType:'all',
    getFilterType:()=>{},
    loading:false,
    Loading:()=>{},

}

export const filterReducer:Reducer<State,filterActions> = (state, action) => {
    const { type, payload } = action;
    switch (type) {
      case FilterActionKind.FILTER_APP:
        return {
          ...state,
          filterType: payload,
        };
        case FilterActionKind.LOADING:
            return {...state, loading:!state.loading}

       default:
        return state
    }}