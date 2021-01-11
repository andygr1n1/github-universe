import React, {useReducer} from "react";
import {AlertContext} from "./alertContext";
import {alertReducer} from "./alertReducer";
import {HIDE_ALERT, SHOW_ALERT} from "../types";
//Я буду провайдить какой-то функционал для дочерних элементов от Alert

//Здесь я буду писать логику, которая будет изменять состояние именно Alert,
// а в самом Alert буду получать доступ до контекста и выводить необходимые данные

export const AlertState =({children}) => {
    const [state, dispatch] = useReducer(alertReducer, null)
    //всегда возврашается массив из 2 параметров
    //state
    //dispatch - функция, позволяет менять данные state

    //TODO внутри AlertState создать необходимые методы, которые будут позволять управлять состоянием AlertState
    const hide = () => dispatch({type: HIDE_ALERT})
    const show = (text, type = 'secondary') => dispatch({type: SHOW_ALERT, payload: {type, text}})

    return (
        <AlertContext.Provider
            value={
                {
                    show,
                    hide,
                    alert: state
                }
            }
        >
            {children}
        </AlertContext.Provider>
    )
}