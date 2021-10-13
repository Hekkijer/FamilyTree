import Node from './Node';

function Branch(props) {
    const branch = props.branch;

    return (
        <div className="branch-outer">
            <Node node={branch}/>
        </div>
    );
}

export default Branch;