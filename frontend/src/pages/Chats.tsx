import React, { useEffect } from 'react'
import axiosInstance from '../axiosConfig';

const Chats = () => {
    const fetchChats = async() => {
        let res = await axiosInstance.get("http://localhost:7000/api/getAllChats");
        console.log(res)
    }
    useEffect(() => {
        fetchChats()
    }, [])
  return (
    <div>Chats</div>
  )
}

export default Chats