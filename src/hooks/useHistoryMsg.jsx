import React from "react";


export const useAllMsgs = () => {
    
    const[allmsg, setAllmsg]=React.useState([])
    const allMsgs = async(sender,reciver) => {
        
        const username = JSON.parse(localStorage.getItem('tokens')).username
        
        const respone= await fetch(process.env.REACT_APP_API_TICKET+'get-all-messages/'+sender+'/'+reciver+'/',{ 
            method :'GET',
            headers :{'Content-Type':'application/json'}})

        const json =await respone.json()
        if(!respone.ok)
        {
            console.log("error")
        }
        if(respone.ok)
        {
            console.log(json)
            setAllmsg(json)
            
        }
    }
    return{allMsgs,allmsg}
}

