import React,{useState,useEffect} from 'react'
import {auth} from '../firebaseauth'

function FirebaseAuth() {
    const[email,setEmail] =useState('');
    const[password,setPass] =useState('');
    const[user,setUser]=useState('');

    useEffect(()=>{
        document.title = user==null?"Sign In":user.email;
    })
useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
        setUser(user);
    })
  },[])
    let create = async()=>{
        let res = await auth.createUserWithEmailAndPassword(email,password);
        console.log(res);
    }

    let logOut = async()=>{
        auth.signOut();
    }

    let signIn =()=>{
        auth.signInWithEmailAndPassword(email,password)
    }
  return (
 
   <>
   {
    user == null?
    <div>
    <label htmlFor='email'>Email</label>
    <input type="text" onChange={(e)=>setEmail(e.target.value)}/>
    <label htmlFor='password'>Password</label>
    <input type="password" onChange={(e)=>setPass(e.target.value)}/>
    <button onClick={create}>Create</button>
    <button onClick={signIn}>Sign In</button>
    </div>:
    <>
     <div>{user.uid}</div>
     <button onClick={logOut}>Log Out</button>
      </>
    }
    </>
  )
}

export default FirebaseAuth