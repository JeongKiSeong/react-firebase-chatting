import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";

const Chats = () => {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => { // 채팅방 목록을 실시간으로 가져옴
        setChats(doc.data()); // 채팅방 목록을 state에 저장
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]); // currentUser.uid가 변경될 때마다 getChats 함수를 실행

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u }); // 채팅방을 선택하면 채팅방의 정보를 state에 저장
  };


  return (
    <div className="chats">
      {Object.entries(chats)?.sort((a, b) => b[1].date - a[1].date).map((chat) => ( // 채팅방을 최근 메시지 순으로 정렬
        <div
          className="search-user"
          key={chat[0]}
          onClick={() => handleSelect(chat[1].userInfo)}
        >
          <img src={chat[1].userInfo.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{chat[1].userInfo.displayName}</span>
            <p>{chat[1].lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;