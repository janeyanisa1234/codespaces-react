import {useState,useEffect} from 'react';
function Item({name,isPacked=false}){
   
   return(<li> {name} {isPacked && ' ✓'} </li>);
}
 
export default function ItemList(){
    const [keyword,setKeyword]=useState("");
    useEffect(()=>{
      console.log("this component is loaded!");
      return()=>{
        alert("component is loaded!");
      }
    },[]);
    const items=[{name:"Sunglass",isPacked:false},
                 {name:"Sunblock",isPacked:true},
                 {name:"Swimming suit",isPacked:true},
                 {name:"Powerbank",isPacked:false},
                 {name:"Towel",isPacked:true}];
 
    const filterList=items.filter(i=>i.name.toLowerCase().includes(keyword.toLowerCase()));
    const itemList = filterList.map(i=><Item key={i.name}
                    name={i.name} isPacked={i.isPacked} />);
    return (<>
    <input type="text" value={keyword} onChange={e=>setKeyword(e.target.value)}/>
            <ui>
                {itemList}
            </ui></>);
}