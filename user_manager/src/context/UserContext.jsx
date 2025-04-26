import { createContext, useContext, useState } from "react"

const UserContext = createContext();

const userData = [{
    userNo : 1,
    id : "user01",
    name : "박지민",
    email : "user01@gmail.com",
    phone : "010-1111-1111",
    status : false,
    imgTitle: "profile1.png"
  },{
    userNo : 2,
    id : "user02",
    name : "김승기",
    email : "user02@gmail.com",
    phone : "010-2222-2222",
    status : true,
    imgTitle: "profile2.png"
  },{
    userNo : 3,
    id : "user03",
    name : "정형일",
    email : "user03@gmail.com",
    phone : "010-3333-3333",
    status : false,
    imgTitle: "profile3.png"
  },{
    userNo : 4,
    id : "user04",
    name : "양동민",
    email : "user04@gmail.com",
    phone : "010-4444-4444",
    status : false,
    imgTitle: "profile4.png"
  },{
    userNo : 5,
    id : "user05",
    name : "정의철",
    email : "user05@gmail.com",
    phone : "010-5555-5555",
    status : false,
    imgTitle: "profile3.png"
  },{
    userNo : 6,
    id : "user06",
    name : "김현아",
    email : "user06@gmail.com",
    phone : "010-6666-6666",
    status : false,
    imgTitle: "profile2.png"
  },{
    userNo : 7,
    id : "user07",
    name : "이인혜",
    email : "user07@gmail.com",
    phone : "010-7777-7777",
    status : false,
    imgTitle: "profile1.png"
  }]

  export function UserProvider({children}){
    const [users, setUsers] = useState(userData);

    return (
        <UserContext.Provider value={{users, setUsers}}>
            {children}
        </UserContext.Provider>
    )
  }

  export function useUsers() {
    const context = useContext(UserContext);

    return context;
  }
