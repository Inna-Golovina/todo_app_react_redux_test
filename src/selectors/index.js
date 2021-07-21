import { createSelector } from "reselect";
import { SHOW_ALL, SHOW_COMPLETED } from "../constants/TodoFilters";
import todos from "../reducers/todos";
import visibilityFilter from "../reducers/visibilityFilter";

const getVisibilityFilter = state => state.visibilityFilter;
const getTodos = state => state.todos;

export const getVisibleTodos = createSelector(
  [getVisibilityFilter, getTodos],
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case SHOW_ALL:
        return todos;

        default:
          throw new Error('Unknown filter:' + visibilityFilter)
    }
  }
)