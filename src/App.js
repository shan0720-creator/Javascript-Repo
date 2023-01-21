import {Box,Button, Container, VStack,Input, HStack} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { Message } from "./components/Message";
import {onAuthStateChanged,getAuth,GoogleAuthProvider,signInWithPopup,signOut} from "firebase/auth";
import { app } from "./components/firebase";
import{getFirestore,addDoc, collection, serverTimestamp,onSnapshot} from "firebase/firestore";
const auth = getAuth(app);
const db = getFirestore(app);

const loginHandler = () =>{
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth,provider);
} 
const logoutHandler = () =>{
  signOut(auth);
}


function App() {
  const [message,setMessage] = useState("");
  const [messages,setMessages] = useState([]);
  const submitHandler = async(e) =>{
    e.preventDefault();
    try{
      await addDoc(collection(db,"Messages"),{
        text:message,
        uid:user.uid,
        uri:user.photoURL,
        createAt:serverTimestamp()

      });
      setMessage("");
    }
  
    catch (error){
    alert(error);
  
    }
  }
  const [user,setUser] = useState(false);
  useEffect(()=>{

   const unsubscribe= onAuthStateChanged(auth, (data)=>{
      setUser(data);
    });
   const unsub =  onSnapshot(collection, (db,"Messages"),(snap)=>{
       setMessages(
         snap.docs.map((item)=>{
           const id = item.id;
           return {id,...item.data()};
         })
         
       )
    })
        
  
    
    return () =>{
      unsub();
      unsubscribe();
    }
  })
  return (
    <Box bg = {"red.50"}> 
    

    
       {user?(
         <Container h={"100vh"} bg={"white"} overflowY="auto">
         <VStack h="full" w={'full'}  overflowY="auto">
          <Button onClick={logoutHandler} colorScheme={"red"} w={"full"}>Logout</Button>
          <VStack h="full" w={"full"}bg= "purple.100" overflowY="auto">
            {
              messages.map((item)=>(
                
                <Message key={item.id} user={item.uri===user.uid?"me":"other"} text={item.text}uri={item.uri}/>
              ))
            }
           
          </VStack>
          
        
         <form onSubmit={submitHandler} style={{width:"100%"}}>
          <HStack>
          <Input value={message} onChange={(e)=>setMessage(e.target.value)} placeholder ="Enter a Message"/>
          <Button colorScheme ={"purple"} type = "submit">Send</Button>
          </HStack>
         </form>
        
          </VStack>
        </Container>
     
  
  
       ):(<VStack  justifyContent={"center"} h="100vh">
        <Button  onClick ={loginHandler}colorScheme={"red"}>Sign In with Google</Button>
       </VStack>
       )}
      
    </Box>
  
    
  )};

export default App;
