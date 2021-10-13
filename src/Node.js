import Person from './Person';


function Node(props) {
    const node = props.node;

    return (
        <div className="branch-inner">
            {node.hasChildren && <div className="node-parent">
                <Person person={node}/>
            </div>}
            {!node.hasChildren && <Person person={node}/>}
            {node.hasChildren && <div className="node-children">
                {// If many children
                node.children.length > 1 && node.children.map((child) => (
                    <div className="node-child sibling">
                        <Node node={child}/>
                    </div>
                ))}
                {// If 1 child
                node.children.length === 1 && node.children.map((child) => (
                    <div className="node-child">
                        <Node node={child}/>
                    </div>
                ))}
            </div> }
        </div>
    );
}

export default Node;