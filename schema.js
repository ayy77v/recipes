 

exports.typeDefs=`
type Recipe{
	name: String!
	category: String!
	description: String!
	instructions: String!
	createdDate: String
	likes: Int
	usernmae: String
}

type User{
	username: String! 
	password:String!
	email: String!
	joindate: String
	favorites:[Recipe]

}
`;