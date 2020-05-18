import React from 'react';



const Link = ({ active, onClick, children }) => (
    <button
        onClick={ onClick }
        disabled={ active }
        style={{
            padding: '14px 40px',
            margin: '10px'
        }}
    >
        {children}
    </button>
);

export default Link;