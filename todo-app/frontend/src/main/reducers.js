import { combineReducers } from "redux";

const rootReducer = combineReducers({
    todo: () => ({
        descripton: 'Ler livro',
        list: [{
            _id: 1,
            descripton: 'Pagar fatura do cartão',
            done: true
        }, {
            _id: 2,
            descripton: 'Reunião com a equipe às 10:00',
            done: false
        }, {
            _id: 3,
            descripton: 'Consulta médica na terça depois do almoço',
            done: false
        }]
    })
})

export default rootReducer