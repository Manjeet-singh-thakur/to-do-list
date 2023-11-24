import React, { useEffect, useState } from 'react'

function View(props) {
    
  useEffect(() => {
    async function fetchdata() {
      try {
        const responce = await fetch("https://jsonplaceholder.typicode.com/comments");
        const data1 = await responce.json();
        console.log("data1 ==>", data1)
        props.setData(data1)
      } catch (error) {
        console.log(error, "there is A ERROR")
      }
    }
    fetchdata();
  }, []);

    return (
        <div>
            {props.data.map((item) => {
                return (
                    <div>
                        <p style={{ fontSize: 20, color: "black" }}>{item.email}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default View
