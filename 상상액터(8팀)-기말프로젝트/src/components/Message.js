import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
            {message.senderId === currentUser.uid // 현재 사용자가 보낸 메시지인지 확인
              ? null
              : <img src = {data.user.photoURL} alt = ""/>}
        <span style={{fontSize: "10px"}}></span>
      </div>
      <div className="messageContent">
        <h1>{message.text}</h1>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;