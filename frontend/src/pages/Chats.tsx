import { useEffect, useState } from 'react'
import axiosInstance from '../axiosConfig';

type Chat = {
  _id: string,
  chatName: string,
}

const Chats = () => {
    const[chats, setChats] = useState<Chat[]>([]);
    const fetchChats = async() => {
        let res = await axiosInstance.get("http://localhost:7000/api/getAllChats");
        let {data} = res;
        if(data){
          setChats(data);
        } else {
          console.log("No chats found");
          setChats([])
        }
        console.log(res)
    }
    useEffect(() => {
        fetchChats()
    }, [])
  return (
    <div>
      {chats?.map((_chat) => {
        return (
          <div key={_chat?._id}>
            <div className='text-black'>{_chat?.chatName}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Chats