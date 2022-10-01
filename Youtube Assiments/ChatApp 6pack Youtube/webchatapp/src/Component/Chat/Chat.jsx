import React, { useEffect,useState } from "react";
import "./Chat.css";
import { user } from "../Join/Join";
import socketIo, { Socket } from "socket.io-client";
// import sendLogo from "../../Image/msg.png"
import Message from "../Message/Message"
import closeIcon from "../../Image/closeicon.png"

// msgs ko scroll k liye 
import ReactScrollTOBottom from "react-scroll-to-bottom"

let socket;

const ENDPOINT = "http://localhost:4500/";

const Chat = () => {
  const [id,setid] = useState("")
  const [messages,setMessages] = useState([])

  const send = () => {
  const message = document.getElementById('chatInput').value;
    socket.emit('message',{message,id});
    document.getElementById('chatInput').value = "";
  }

  console.log("messages=>",messages)
  
  useEffect(() => {
    socket = socketIo(ENDPOINT, { transports: ["websocket"] });
    // on ka matlb ha data recive karna
    socket.on("connect", () => {
      // alert("Connected");
      setid(socket.id);
    });
    console.log("socket=>",socket)
    // emit ka mtlb data bhejna yaha se backend may bhej raha ho data
    socket.emit("joined", { user });

    socket.on("welcome",(data)=>{
      setMessages([...messages,data])
      console.log(data.user,data.message)
    })

    socket.on("userJoined",(data)=>{
      setMessages([...messages,data])
      console.log(data.user,data.message)
    })

    socket.on("leave",(data)=>{
      setMessages([...messages,data])
      console.log(data.user,data.message)
    })

    return () => {
      socket.emit('disconnect')
      socket.off()
    };
  }, []);

  useEffect(()=>{
    socket.on('sendMessage',(data)=>{
      setMessages([...messages,data]);
      console.log(data.user,data.message,data.id)
    });
     
    return () => {
      socket.off()
    }
  },[messages])

console.log("user=>>",user)
  return (
    <div className="chatPage">
      <div className="chatContainer">
        <div className="chatHeader">
          <h2>Web ChatApp</h2>
         <a href="/"><img src={closeIcon} className="close" alt="close" /></a>
        </div>
        <ReactScrollTOBottom className="chatBox">
          {messages.map((item,i) => <Message key={i} user={item.id === id?"":item.user} message={item.message} classs={item.id === id?"right":"left"} />)}
        </ReactScrollTOBottom>
        <div className="inputBox">
          <input onKeyPress={(event)=> event.key === "Enter"? send() :null} placeholder="Message" type="text" id="chatInput" />
          <button className="sendBtn" onClick={send}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTcTk3EapdvmziJ-eckbG68jf6PWB9qC-jWA&usqp=CAU" alt="send"/></button>
        </div>
      </div>
    </div>
  );
};
export default Chat;
