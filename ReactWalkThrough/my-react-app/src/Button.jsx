function Button(){

    function handleClick(){
        console.log("haha");
    }

    function handleClick2(e){
        console.log(e)
        e.target.textContent = "Ouch"
    }

    return(
        <button onDoubleClick={(e) =>handleClick2(e)}>Click Me 😊</button>
    )
}

export default Button