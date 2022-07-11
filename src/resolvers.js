const resolvers = {
    Query: {
        tracksForHome: (_, __, { dataSources }) => {
            return dataSources.trackAPI.getTracksForHome()
        },
        track: (_, { id }, { dataSources }) => {
            return dataSources.trackAPI.getTrack(id)
        }
    },

    Mutation: {
        incrementTrackViews: async (_, { id }, { dataSources }) => {
            try {
                const track = await dataSources.trackAPI.incrementTrackViews(id)
                return {
                    code: 200,
                    success: true,
                    message: `track ${id} views count was successfully incremented`,
                    track: track
                }
            } catch (err) {
                return {
                    code: err.extensions.response.status,
                    success: false,
                    message: err.extensions.response.body,
                    track: null
                }
            }
        }
    },
    Track: {
        author: ({ authorId }, __, { dataSources }) => {
            return dataSources.trackAPI.getAuthor(authorId)
        },
        modules: ({ id }, __, { dataSources }) => {
            return dataSources.trackAPI.getTrackModules(id)
        }
    }

};


module.exports = resolvers