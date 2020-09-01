import reducer from '../reducers';

describe('Reducer testing',() => {
    it('should  return initial state',() => {
        expect(JSON.stringify(reducer(undefined,{})))
        .toEqual(JSON.stringify({
            articles:{},
            gallery:{}
        }))
    })

    it('Return array on action',() => {
        let state={
            articles:[],
            gallery:[]
        }

        state= reducer(state,{action:'GET_LATEST'})

        expect(state).toEqual({
            articles:[],
            gallery:[] 
        })
    })
})
