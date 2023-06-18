import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import conf from "./conf/conf";
import { schema } from "./schema";


// init
const port = conf.PORT || 3000;


// server
export const server = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});


// start
server.listen({ port }).then(({ url }) => {
    console.log(`Server running at ${url}`);
});