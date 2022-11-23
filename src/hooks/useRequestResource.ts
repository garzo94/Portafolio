import { useCallback, useState, } from "react";
import axios from "axios"
import { DataInterface } from "../Types/types";
const client = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
  });




export default function useRequestResource(type:string) {
    const [data, setData] = useState<DataInterface[]>([])
    const getResourceList = useCallback(
        ()=>{
          console.log(type,'typeee')
          client.get(`${type}/`)
          .then((res)=>{
            setData(res.data)
          })
          .catch((err)=>console.log(err,'err'))
        },[setData]
            )


          return {data, getResourceList}


}
