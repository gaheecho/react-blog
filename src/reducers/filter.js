import { SET_FILTER } from '../actions';

const filter = (state = filter.SHOW_ALL, action) => {
    switch (action.type) {
      case SET_FILTER:
        return action.filter
      default:
        return state
    }
  }