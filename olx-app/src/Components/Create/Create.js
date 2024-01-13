import React from 'react';
import './Create.css';
import Header from '../Header/Header';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {storage} from "../../Firebase/config"
import { useState } from 'react';


function Create() {
  const [selectedImage,setSelectedImage]=useState("")
  const handleFileChange = (e) => {
    console.log(e.target.files[0],"ADHULYAAAAAAAAAAAAAAAAAA");
    setSelectedImage(e.target.files[0]);

  };

  const uploadImageHandler = () => {
    const reference = ref(storage, `customer/${selectedImage.name}`);
    uploadBytes(reference, selectedImage)
      .then((res) => {
        getDownloadURL(reference).then((url) => {
          console.log(url, "PRINTED");
          // const datas = {
          //   imageurl: url,
          //   id: statedatas.value.custdetails.id,
          // };
          // axiosInstance.post("cust/changeimage/").then((response) => {
          //   console.log(response.data);
          //   if (response.data.message == "Added") {
          //     console.log("ALL SET");
          //     localStorage.setItem(
          //       "singledetails-C",
          //       JSON.stringify(response.data.custdata)
          //     );
          //     // dispatch(setCustDetails(response.data.custdata));
          //   } else {
          // //     alert("NOT SET");
          // //   }
          // });
        });
      })
      .catch(() => {
        console.log("Error");
      });
  };
  return (
    <div>
      <>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price" />
            <br />
          </form>
          <br />
          <img alt="Posts" width="200px" height="200px" src=""></img>
          <form>
            <br />
            <input type="file" onChange={handleFileChange}/>
            <br />
            <button className="uploadBtn" onClick={uploadImageHandler}>upload and Submit</button>
          </form>
        </div>
      </card>
    </>
  
    </div>
  )
}

export default Create
