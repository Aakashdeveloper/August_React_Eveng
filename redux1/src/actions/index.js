export function moviesList(){
    return{
        type:'MOVIES_LIST',
        payload:[
            {id:1,name:'Death Race'},
            {id:2,name:'Avangers'},
            {id:3,name:'Mad Max'}
        ]
    }
}