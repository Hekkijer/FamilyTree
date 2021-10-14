import React from 'react';
import Person from './Person';


function Node(props) {
    const node = props.node;
    let hasSibling = "";
    if (props.hasSibling) hasSibling = "has-sibling";

    return (
        <div className={`branch-inner ${hasSibling}`}>
            {node.hasChildren && 
                <Person person={node}/>
            }
            {!node.hasChildren && <Person person={node}/>}
            {node.children && node.children.length > 1 && <div className="node-children">
                {// If many children
                node.children.map((child) => (
                    <Node node={child} hasSibling={true}/>
                ))}
            </div>}

            {node.children && node.children.length === 1 && <React.Fragment>
                {// If 1 child
                node.children.length === 1 && node.children.map((child) => (  
                    <Node node={child}/>
                ))}
            </React.Fragment>}
        </div>
    );
}

export default Node;