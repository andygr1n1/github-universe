//Редюсеры это функции, которые просто проверяют Action.type и возвращают обновлённый State
//reduce === превращать
import {HIDE_ALERT, SHOW_ALERT} from "../types";

const handlers = {
    [SHOW_ALERT]: (state, action) => action.payload,
    [HIDE_ALERT]: () => null,
    DEFAULT: state => state

}

export const alertReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)

    //ранее тут существовал switch, но в данном случае Reducer выгялдит более красиво
}


//по сути весь State будет представлять из себя данные для Alert