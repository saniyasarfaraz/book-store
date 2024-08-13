import React ,{useState} from 'react';
import axios from 'axios';
import { response } from 'express';
const AddBook=() =>{
const [data,setDate ] =useState({
  url:"",
  title:"",
  author:"",
  price:"",
  desc:"", 
  language:"",
});
const change =(e) => {
  const {name,value} = e.target;
  setDate({...Date,[name]: value});
};
const submit = async() => {
  try {
    if(
      Data.url ===""||
      Data.title ===""||
      Data.author ===""||
      Data.price ===""||
      Data.desc ===""||
      Data.langues ===""
    ) {
      alert("All filles are requrired");
    } else {
      const response =await axios.post(
        "http://localhost:1000/api/v1/add-book",
      Data,
      {Headers}
      );
    SetData({
         url:"",
         title:"",
         auther:"",
         price:"",
         desc:"",
         language:"",
    });
      alert(response.data.message);
  }
} catch (error) {
  alert(error.response.data.messag);
}
};
return (
  <div className='h-[100%] p-0 md:p-4'>
    <h1 className='text-3xl md:text-5xl font-semibold text-zinc'>
       Add Book
    </h1>
    <div className='p-4 rounded'>
    <div>
    <label htmlFor=''className='text-'>
      Image
      </label>
    <input 
       type='text'
        className='w-full mt-2'
        placeholder='url of image'
        name='url'
          required
       value={Data.url}
       onChange={change}
     />
   </div>
    <div className='mt-4'>
      <label htmlFor=''className='text-'>
        Title of Book
        </label>
      <input 
         type='text'
          className='w-full mt-2'
          placeholder='url of Title'
          name='Title'
            required
         value={Data.Title}
         onChange={change}
       />
   </div>
 <div className='mt-4'>
    <label htmlFor=''className='text-'>
      Author of Book
      </label>
    <input 
       type='text'
        className='w-full mt-2'
        placeholder='url of book'
        name='auther'
          required
       value={Data.auther}
       onChange={change}
     />
     </div>
  <div className='mt-4 flex gap-4'>
  <label htmlFor=''className='text-'>
    Language
    </label>
  <input 
     type='text'
      className='w-full mt-2'
      placeholder='url of language'
      name='Language'
        required
     value={Data.language}
     onChange={change}
   />
   </div>
 <div className='mt-4'>
 <label htmlFor=''className='text-'>Price</label>
 <input 
    type='text'
     className='w-full mt-2'
     placeholder=' Price'
     name='price'
       required
    value={Data.price}
    onChange={change}
  />
</div>
<div className='mt-4'>
 <label htmlFor=''className='text-'>
  Description of book
  </label>
 <textarea 
    type='text'
     className='w-full mt-2'
     rows='5'
     placeholder='description of book'
     name='desc'
       required
    value={Data.desc}
    onChange={change}
  />
</div>

<button 
className='mt-4 px-3 bg-white-500 text-black font-semibold'
onClick={submit}
>
  Add Book
</button>
</div>
</div>
);
};

export default AddBook;
 
