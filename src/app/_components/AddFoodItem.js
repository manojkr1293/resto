import { useState } from "react"

const AddFoodItem = (props) =>{
  const [foodname,setFoodname] = useState('');
  const [price, setPrice]  = useState('');
  const [image, setImage] = useState('');
  const [err, setErr] = useState(false);

  const handleAddItem = async () =>{ 
    console.log(foodname,price,image)
    if(!foodname || !price || !image){
      setErr(true);
      return false;
    }else{
      setErr(false);
    }
    
    let restoId;
    let restoUser = JSON.parse(localStorage.getItem('resturentUser'));
    
    if(restoUser){
      restoId = restoUser._id
    }
    let response = await fetch("http://localhost:3000/api/resturent/fooditem",{
      method:"post",
      body:JSON.stringify({name:foodname,price,image_path:image,resto_id:restoId})
    })

    response = await response.json();
    if(response.success){
      console.log(response);
      setFoodname('');
      setImage('');
      setPrice('');
      props.setFooditem(false);
    }
  }

  return(
    <>
    <div className="flex justify-center items-center mt-10">
     <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <div className="block">
        <h1 className="text-3xl font-semibold w-full text-blue-500 text-center mb-8">Add New Food Item</h1>
        <div className="mb-4 mt-4">
        <label className="text-sm text-blue-500 font-semibold mb-4 w-full block">Food Name</label>
        <input type="text" onChange={(e)=>setFoodname(e.target.value)} value={foodname} className="rounded-sm text-sm text-blue-500 font-semibold px-3 py-2 ring-2 mb-4 w-full block"/>
        {
          err && !foodname && <span className="text-sm text-red-700 font-medium">Food name is required</span>
        }
        </div>
        <div className="mb-4 block">
          <label className="text-sm text-blue-500 font-semibold  mb-4 w-full block ">Price</label>
          <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price} className="text-blue-500 font-semibold ring-2 rounded-sm px-3 py-2  mb-4 w-full block"/>
          {
            err && !price && <span className="text-sm text-red-600 font-medium">Price is required</span>
          }
        </div>
        <div className="mb-4 block">
          <label className="text-blue-500 font-semibold mb-4 text-sm">Image</label>
          <input type="text" value={image} onChange={(e)=>setImage(e.target.value)} className="text-blue-500 font-semibold ring-2 rounded-sm px-3 py-2 mb-4 w-full block"/>
          {
            err && !image && <span className="text-sm text-red-600 font-semibold">Image is required</span>
          }
        </div>
        <div className="mb-4 flex justify-center">
          <button onClick={handleAddItem} className="text-2xl text-white font-semibold bg-blue-600 rounded-sm p-2 mt-4 block">Submit</button>
        </div>
      </div>

     </div>
    </div>
    </>
  )
}

export default AddFoodItem;