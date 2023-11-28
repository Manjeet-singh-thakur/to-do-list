import React, { useContext, useEffect } from 'react'
import { ContextStore } from '../store';

function View() {
  const storeVal =  useContext(ContextStore);

  useEffect(() => {
    async function fetchdata() {
      try {
        const responce = await fetch("https://jsonplaceholder.typicode.com/users");
        const data1 = await responce.json();
        storeVal.setData(data1)
      } catch (error) {
        console.log(error, "there is A ERROR")
      }
    }
    fetchdata();
    // eslint-disable-next-line
  }, []);

  console.log("data ==>",storeVal.data)
    return (
        <div>
            {storeVal.data.map((item,i) => {
                return (
                    <div key={i}>
                        <p style={{ fontSize: 20, color: "black" }}>{item.email}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default View
