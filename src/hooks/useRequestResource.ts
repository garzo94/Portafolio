import { useCallback, useState, } from "react";
import axios from "axios"
import { DataInterface } from "../Types/types";
const client = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
  });

export default function useRequestResource() {
    const [data, setData] = useState<DataInterface>()
    const getResourceList = useCallback(
        (type:string,query:string)=>{
          console.log(query,'queryyyyy')
          client.get(`${type}/${query}`)
          .then((res)=>{
            setData(res.data)
          })
          .catch((err)=>console.log(err,'err'))
        },[setData]
            )
          return {data, getResourceList}


}
