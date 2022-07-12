const { gql } = require('apollo-server')

const typeDefs = gql`
"query to get tracks for homepage grid"
type Query {
    tracksForHome: [Track!]!
    track(id:ID!):Track
}

type Mutation {
    incrementTrackViews(id: ID!):IncrementTrackViewResponse
}

type IncrementTrackViewResponse{
    code: Int!
    success: Boolean!
    message: String!
    track: Track
}

type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    durationInSeconds: Int
    length: Int @deprecated (reason: "use durationInSeconds")
    modulesCount: Int
    description: String
    numberOfViews: Int
    modules: [Module!]!
}

type Author {
    id: ID!
    name: String!
    photo: String
}

type Module {
    id: ID!
    title: String!
    durationInSeconds: Int
    length: Int @deprecated (reason: "use durationInSeconds")
}

`

module.exports = typeDefs