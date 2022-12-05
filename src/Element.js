
export const Element = ({item,itemClicked,deleteItem,showItem}) => {
    console.log(item);
    
    return <div>
        <li onClick={itemClicked}>{item}</li>
        <button type="button" onClick={() => {
            deleteItem(item);
        }}>Delete</button>

<button type="button" onClick={() => {
            showItem(item);
        }}>Show</button>
    </div>;
}


export const Title = () => {
    return <h1>Title Component</h1>;
}