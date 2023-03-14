import React from 'react';

function Image({image}) {
    return (
        <div>
           <img src={image} width="400px" height="265px" alt="pic" />
        </div>
    );
}

export default Image;