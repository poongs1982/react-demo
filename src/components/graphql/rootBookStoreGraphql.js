import React from 'react';
import BookStoreGraphql from './bookStoreGraphql';

import { ApolloProvider , ApolloClient, InMemoryCache } from '@apollo/client'
import { Outlet } from 'react-router-dom';

const client = new ApolloClient({
    uri: "http://localhost:8082/graphql",
   cache: new InMemoryCache()
   
})


function RootBookStoreGraphql() {
    return ( <div>
        <ApolloProvider client={client}>
            <Outlet></Outlet>
        </ApolloProvider>
    </div> );
}

export default RootBookStoreGraphql;