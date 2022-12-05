
export const Element = ({item,itemClicked,deleteItem}) => {
    console.log(item);
    
    return <div>
        <li onClick={itemClicked}>{item}</li>
        <button type="button" onClick={() => {
            deleteItem(item);
        }}>Delete</button>
    </div>;
}


export const Title = () => {
    return <h1>Title Component</h1>;
}