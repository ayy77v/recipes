 
const {  gql } = require('apollo-server-express');
exports.typeDefs=gql`

type Recipe{
	_id: ID
	name: String!
	category: String!
	description: String!
	instructions: String!
	createdDate: String
	likes: Int
	usernmae: String
}

type User{
	_id:ID
	username: String! 
	password:String!
	email: String!
	joindate: String
	favorites:[Recipe]

}
type Token{
	token: String!
}
 type Query {
    getAllRecipes:[Recipe]
  }

  type Mutation{
  	addRecipe(name: String!, category:String!, description: String!, instructions: String!,username: String): Recipe
  	signinUser (username: String!, password: String!): Token
  	signupUser(username: String!,email: String!,password: String!): Token
  }
`;