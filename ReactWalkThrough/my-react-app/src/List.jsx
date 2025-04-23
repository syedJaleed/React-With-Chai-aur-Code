function List(props) {
    
    let items = props.items

    // fruits.sort((a, b) => a.name.localeCompare(b.name));
    
    // const low = items.filter(fruit => fruit.cal >  20)

    const listItems =  items.map(item => <li key={item.id}>{item.name}: {item.cal}</li>)
    return (
        <ol>{listItems}</ol>
    )
}

export default List;