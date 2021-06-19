import React, {Component} from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';


class App extends Component{
  constructor(props){
super(props);
this.state={
  title: 'React Crud Application',
  act:0,
  index:'',
  datas:[]
}
 }

componentDidMount(){
  this.refs.name.focus();
}

fsubmit = (e)=>{
  e.preventDefault();
  console.log('crud');

  let datas = this.state.datas;
  let name = this.refs.name.value;
  let roll = this.refs.roll.value;

if(this.state.act===0){
  let data={
    name,roll
  }
datas.push(data);
}else{
  let index =this.state.index;
  datas[index].name=name;
  datas[index].roll=roll;
}
this.setState({
  datas:datas,
  act:0
});


this.refs.myform.reset();
this.refs.name.focus();

}

fRemove= (i) => {
  let datas=this.state.datas;
  datas.splice(i,1);
  this.setState({
    datas:datas
  });
  this.refs.myform.reset();
  this.refs.name.focus();
}

fEdit=(i) =>{
  let data=this.state.datas[i];
  this.refs.name.value=data.name;
  this.refs.roll.value=data.roll;


  this.setState({
    act:1,
    index:i
  });
  this.refs.name.focus();
}


render(){
  let datas=this.state.datas;
  return (
    <div className="App">
      <Box textAlign="center" color="text.primary"  fontWeight="fontWeightBold">{this.state.title}</Box>
      <form ref="myform" className="myForm">
        <input type="text" ref="name" placeholder="Name" className="formfield"/>
        <input type="text" ref="roll" placeholder="Roll No" className="formfield"/>
         <Button color="primary" variant="contained" onClick={(e)=>this.fsubmit(e)} className="myButton">Submit </Button>  
      </form>
      <pre>
        {datas.map((data,i)=>
        <li key={i} className="myList">
          {i+1}.{data.name},{data.roll}
          
          <Button color="secondary" variant="contained" onClick={()=>this.fRemove(i)} className="myButton">Delete</Button>
         
          <Button color="primary" variant="" onClick={()=>this.fEdit(i)} className="myButton">Edit</Button>
        </li>
        )}
        


        </pre>
    </div>
  );
}
}

export default App;
