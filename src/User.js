


export const User = ({search,setSearch,update,handleSubmit,name,address,age,Id,setAge,setAddress,setName,SetId}) => {
   
    
  return (
    <div className='userInput'>
       <form>
       <div className="form-group">
        <input type="text" id="id" value={Id}  onChange={(e)=>SetId(e.target.value) } hidden/>
        
       <label htmlFor="name">Name:</label>
       <input type="text" id="name"  className="form-control" value={name} onChange={(e)=>setName(e.target.value)}/><br/>
        
        
        <label htmlFor="address">address:</label>
        <input type="text" id="address" className="form-control" value={address} onChange={(e)=>setAddress(e.target.value)} /><br/>


        <label htmlFor="age">Age:</label>
        <input type="text" id="age" className="form-control" value={age} onChange={(e)=>setAge(e.target.value)} /><br/>
        </div>
        <button type="Submit" onClick={handleSubmit} className="btn btn-success">Save</button> 

        <button className="btn btn-info" onClick={update}>Update</button>
       
            
      <input
        type="text"
        className="form-control"
        placeholder="Search..."
        value={search} 
        onChange={(e)=>{
        setSearch(e.target.value)
        }}
        />
       
       </form>
    </div>
  )
}
