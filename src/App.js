import { useEffect, useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { User } from "./User";
import { View } from "./View";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from "axios";



function App() {  
  const[name,setName]=useState("")
  const[id,setId]=useState("")
  const[address,setAddress]=useState("")
  const[age,setAge]=useState("")
  const[datas,setDatas]=useState([])
  const[data,setData]=useState({})
  const[search,setSearch]=useState([])

  const fetchPosts=async ()=>
  {
    try {
      const response=await axios.get('http://localhost:8084/api/v1/customer/getall');
      setDatas(response.data);
      
    } catch (error) {
      if(error.response)
      {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.Header);
      }
      else{
        console.log(`ERROR:${error.message}`);

      }
    }
  }

  useEffect(()=>
  {
    
    fetchPosts();
  },[])

  


  const handleSubmit=async(event)=>
  {event.preventDefault();
    const JsonToS = {
      name: name,
      address: address,
      age: parseInt(age)
    };
    
    //const JsonToS = JSON.stringify(jsonData);
    if(JsonToS.name!=="" &&JsonToS.address!==""&&JsonToS.age>0)
    { 
    const save=async ()=>
    {
      try {
        const response=await axios.post('http://localhost:8084/api/v1/customer/save',
        JsonToS
        );
        window.alert(response.data+" is Created");
        fetchPosts();
        setName("");
        setAddress("");
        setAge("");
      } catch (error) {
        if(error.response)
        {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.Header);
        }
        else{
          console.log(`ERROR:${error.message}`);

        }
      }
    }
  
    save();
  }
  else{
    window.alert("please Fill requied fields....!")
  }
    
  }
  

  const update=(event)=>
  {
    event.preventDefault();
    const JsonToS = {
      id:parseInt(data.id),
      name: name,
      address: address,
      age: parseInt(age)
    };
    
    //const JsonToS = JSON.stringify(jsonData);
    if(JsonToS.name!=="" &&JsonToS.address!==""&&JsonToS.age!=="")
    { 
    const put=async ()=>
    {
      try {
        const response=await axios.put('http://localhost:8084/api/v1/customer/update',
          {
            id:data.id,
            name:name,
            address:address,
            age:parseInt(age)
          }
        );
        window.alert(response.data.name+" is Updated");
        fetchPosts();
        setName("");
        setAddress("");
        setAge("");
      } catch (error) {
        if(error.response)
        {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.Header);
        }
        else{
          console.log(`ERROR:${error.message}`);

        }
      }
    }
    put();
  }
  else{
    window.alert("please Fill requied fields....!")
  }
  }
  const edit=async(Data)=>
  {
    setName(data.name);
    setAddress(data.address);
    setAge(String(data.age));
    
  }
  const trunc=(Data)=>
  {
    const dlt=async ()=>
    {
      try {
        await axios.delete('http://localhost:8084/api/v1/customer/delete/'+data.id );
        
        fetchPosts();
        
        
      } catch (error) {
        if(error.response)
        {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.Header);
        }
        else{
          console.log(`ERROR:${error.message}`);

        }
      }
    }
    dlt();
  }


  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="text-center">
        <Header/>
      <User search={search} setSearch={setSearch}  update={update} handleSubmit={handleSubmit} name={name} address={address} age={age} setName={setName} Id={id} SetId={setId} setAddress={setAddress} setAge={setAge} />
      <View search={search} setSearch={setSearch} datas={datas}  edit={edit} Data={data}  trunc={trunc} setData={setData}  />
      <Footer/>
      </div>
      
      
    </div>
  );
}

export default App;
