import React,{Component} from 'react';
import './Avatar.css';
import Avatarlist from './Avatarlist';
import 'tachyons';


    class Avatar extends Component{
       constructor(){
           super();
           this.state = {
               name :'welcome to the Avatar World'
           }
       }
       namechange(){
           this.setState({
               name: 'Hello, Welcome !!'
           })
       }
        render(){
            const Avatarlistarray = [
                {
                    id: 1,
                    name:'anita',
                    work: 'web developer'
                },
                {
                    id: 2,
                    name:'annie',
                    work: 'web developer'
                },
                {
                    id: 3,
                    name:'anifa',
                    work: 'web developer'
                },
                {
                    id: 4,
                    name:'ciya',
                    work: 'web developer'
                }
            ]
        
            const avatarcard = Avatarlistarray.map( (avatarcard, i) => {
                return <Avatarlist key={i} id={Avatarlistarray[i].id}
                                          name={Avatarlistarray[i].name} 
                                          work={Avatarlistarray[i].work} />
            })
           
            return (
                <div className="mainpage">
                    <h1> { this.state.name} </h1>
        
                 {avatarcard}
               
               <button onClick = {() => this.namechange()}>  Subscribe </button>
                </div>
            )
        }

    }

   

export default Avatar;