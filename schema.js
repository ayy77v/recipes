 
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
 type Query {
    getAllRecipes:[Recipe]
  }

  type Mutation{
  	addRecipe(name: String!, category:String!, description: String!, instructions: String!,username: String): Recipe
  }
`;