import React from 'react'

export const View = ({search,datas,edit,trunc,setData,Data}) => {
  return (
    <div className='table-responsive'>
         <table className='table table-bordered table-hover '>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>ADDRESS</th>
                <th>AGE</th>
                <th>OPTIONS</th>
            </tr>
            </thead>
            {
               datas.filter(data => search===''? data:
                data.name.toLowerCase().includes(search.toString().toLowerCase()) ||
                data.address.toLowerCase().includes(search.toString().toLowerCase()) ||
                data.age.toString().toLowerCase().includes(search.toString().toLowerCase())
              ).map((data)=>
                { 
                    
                    return(
                        
                        <tbody key={data.id}>
                        <tr >
                            
                            <td >{data.id}</td>
                            <td >{data.name}</td>
                            <td>{data.address}</td>
                            <td>{data.age.toString()}</td>
                            <td>
                                <button className='btn btn-warning' onClick={async()=>
                                { await setData(data);                                                                     
                                }} onDoubleClick={()=>{
                                    edit(Data);
                                }}>EDIT</button>
                                <button className='btn btn-danger' onClick={async()=>{
                                    await setData(data);
                                    
                                }} onDoubleClick={()=>{
                                    trunc(Data);
                                }}
                                
                                >DELETE</button>
                            </td>
                        </tr>
                        </tbody>
                    );
                })
            }
        </table>

    </div>
  )
}
