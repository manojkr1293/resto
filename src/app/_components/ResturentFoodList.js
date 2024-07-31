import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ResturentFoodList = () =>{
  const [fooditemList, setFooditemList] = useState();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  
  const router = useRouter();
  useEffect(()=>{
    loadFoodList();
  },[])
  
  const loadFoodList = async () =>{
    let restoUser = JSON.parse(localStorage.getItem('resturentUser'));

    let response = await fetch(`${apiUrl}api/resturent/fooditem/`+restoUser._id);
    response = await response.json();
    if(response.success){
      setFooditemList(response.result);
    }else{
      alert("Food Not Found");
    }
  }

  const editFoodItem = (id) =>{
    //router.push('fooditems/'+id);
  }

  const deleteFoodItem = async(id) =>{
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    let response = await fetch(`${apiUrl}api/resturent/fooditem/`+id,{
      method:"DELETE"
    });

    response = await response.json();
    if(response.success){
      loadFoodList();
    }else{
      alert("Food Item Not Deleted");
    }

  }
  return(
    <>
    <h1 className="text-center text-3xl text-blue-600 font-semibold mt-5">Restaurants Food List</h1>
    <div className="flex justify-center items-center mx-auto mt-5">
    {fooditemList && 
      <table className="table-auto border border-collapse border-gray-400">
        <thead>
          <tr>
            <td className="border border-slate-300 p-2">S.No</td>
            <td className="border border-slate-300 p-2">Name</td>
            <td className="border border-slate-300 p-2">Price</td>
            <td className="border border-slate-300 p-2">Image</td>
            <td className="border border-slate-300 p-2" colSpan={2}>Operation</td>
          </tr>
        </thead>
        <tbody>
          {fooditemList.map((items,key)=>(
            <tr key={key}>
            <td className="border border-slate-300 p-2">{key+1}</td>
            <td className="border border-slate-300 p-2">{items.name}</td>
            <td className="border border-slate-300 p-2">{items.price}</td>
            <td className="border border-slate-300 p-2">
              <img className="rounded-md w-20 shadow-md" src={items.image_path}/></td>
            <td className="border border-slate-300 p-2" onClick={(e)=>editFoodItem(items._id)}>Edit</td>
            <td className="border border-slate-300 p-2" onClick={(e)=>deleteFoodItem(items._id)}>Delete</td>
          </tr>
          ))}
          
        </tbody>
      </table>
    }
    </div>
    </>
  )
}
export default ResturentFoodList;