import React, { useContext } from 'react';
import { UserContext } from './rootComponent';

function Level3Component() {

    const userName = useContext(UserContext);
    return ( <div>
        User Context: { userName }
    </div>);
}

export default Level3Component;