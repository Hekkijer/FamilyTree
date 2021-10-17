import Node from './Node';

function Branch(props) {
    const branch = props.branch;

    return (
        <Node node={branch}/>
    );
}

export default Branch;