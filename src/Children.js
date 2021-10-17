import React from 'react';
import Node from './Node';

export default function Children(props) {
    const children = props.children

    // If many children
    if (children.length > 1 ) {
        return (
            <React.Fragment>
                {children.map((child) => (
                    <Node node={child} hasSibling={true}/>
                ))}
            </React.Fragment>
        );
    }

    // If 1 child
    else {
        return (
            <Node node={children[0]}/>
        );
    }
}