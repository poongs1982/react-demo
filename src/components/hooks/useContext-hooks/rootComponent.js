import React from 'react';
import Level1Component from './level1Component';

export const UserContext = React.createContext();

function RootComponent() {
    return ( 
        <div>
            <UserContext.Provider value={'John Smith'}>
                <Level1Component/>
            </UserContext.Provider>
            
        </div>
     );
}

export default RootComponent;