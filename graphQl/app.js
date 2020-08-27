const express = require('express');
const expressGraphQL = require('express-graphql');
const port = 8600;
const app = express();
const schema = require('./schema/schema')
const cors = require('cors');

app.use(cors());

app.use('/graphql', expressGraphQL({
    schema,
    graphiql:true
}))

app.listen(port,()=> {
    console.log(`App is running on port ${port}`)
})

