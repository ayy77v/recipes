const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Recipe = require('./models/Recipe');
const User = require('./models/User');
//Bring in GraphQl-Express
//const {graphiqlExpress,graphqlExpress}=require('apollo-server-express');
//const {makeExecutableSchema}= require('graphql-tools');
const {typeDefs}= require('./schema');
const {resolvers}=require('./resolvers');
//const { SchemaDirectiveVisitor } = require("apollo-server-express");
const { ApolloServer} = require('apollo-server-express');
const cors = require('cors');


/*
class UniqueIdDirective extends SchemaDirectiveVisitor {
  visitObject(type) {
    const { name, from } = this.args;
    const fields = type.getFields();
    if (name in fields) {
      throw new Error(`Conflicting field name ${name}`);
    }
    fields[name] = {
      name,
      type: GraphQLID,
      description: 'Unique ID',
      args: [],
      resolve(object) {
        const hash = createHash("sha1");
        hash.update(type.name);
        from.forEach(fieldName => {
          hash.update(String(object[fieldName]));
        });
        return hash.digest("hex");
      }
    };
  };
};
*/


require('dotenv').config({path: 'variable.env'});
//connect to database
mongoose.connect(process.env.MONGO_URI,{ useUnifiedTopology: true ,},).then(()=>console.log('DB connected')).catch(err=>console.error(err));

const corsOptions = {
  origin:'http://localhost:3000',
  credentials: true
}

const app = express();
app.use(cors(corsOptions));
const PORT = 8000;

const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  context:{
    Recipe,
    User,
    playground:{
      endpoint:'/graphql'
    }
  } });
server.applyMiddleware({
  app, // app is from an existing express app
});

app.listen(PORT,()=>{
	console.log('server running at port 8000')
})