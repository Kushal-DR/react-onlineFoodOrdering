import React from "react";

class ReactClass extends React.Component{
    constructor(props){
        super(props)

        this.state={
            count:1,
            obt:{
                name : "Dummy Name",
                location : "Dummy Location"
            }
        };
    }
    async componentDidMount(){
        const data=await fetch("https://api.github.com/users/hiteshchoudhary");
        const json=await data.json();
        console.log(json);        
        this.setState({
           obt:json ,
        })


    }
    componentDidUpdate(){
        console.log("component update");//like dependency array in useeffect

    }
    componentWillUnmount()
    {

    }

    render(){
        const {count} = this.state;
        const {name , location,avatar_url}=this.state.obt;
        return(
            <div>
                <div className="reactcla" style={{border:" 1px solid black"}}>
                <h1>Name : {this.props.name}</h1>
                <h1>Count : {count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count+1,
                    })}}>increment</button>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count-1,
                    })}}>decrement</button>

                </div>
                <div className="reactcla" style={{border:" 1px solid black"}}>
                    <h1>Name :kushal</h1>
                    <h2>Location : banglore</h2>
                    <img src={avatar_url} alt="no img"></img>

                </div>
            </div>
            )
            

        
    }
}

export default ReactClass;