import React from 'react';
import Person from './Person';
import Children from './Children';


export default function Node(props) {
    const node = props.node;
    let className = "branch-container"
    if (props.hasSibling) className = "branch-container has-sibling"

    return (

        // Spawn self at start -> then give children to <Node /> -> spawn children
        <div className={className}>
            {node.children && 
                <React.Fragment>

                    <Person person={node}/>

                    <div className="node-children">
                        <Children children={node.children}/>
                    </div>

                </React.Fragment>
            }

            {!node.children &&
                <Person person={node} />
            }
        </div>
    );
}