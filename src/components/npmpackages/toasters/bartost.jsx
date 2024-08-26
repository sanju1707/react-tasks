import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { errorToasts } from './bartost';

function CustomBArToast() {
  const notify = () => {
    toast("Default Notification !", { autoClose: 2000, theme: 'dark' });

    toast.success("Success Notification !", {
      position: "top-center",
      icon: ({ theme, type }) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src='https://th.bing.com/th/id/OIP.dssd7N5Y-t2XOfahPntOSgHaGd?rs=1&pid=ImgDetMain' 
            alt="Success Icon" 
            style={{ width: '24px', height: '24px', marginRight: '8px' }} 
          />
          
        </div>
      )
    });
   

    toast.error("Error Notification !", {
      position: "top-left"
    });

    toast.warn("Warning Notification !", {
      position: "bottom-left"
    });

    toast.info("Info Notification !", {
      position: "bottom-center"
    });
  };
  const notify2=()=>{
    errorToasts("i am message","top-right")
  }

  return (
    <div>
      {/* <button onClick={notify}>Notify !</button> */}
      <button onClick={notify2}>notify error</button>
      <ToastContainer autoClose={1000} />
    </div>
  );
}

export default CustomBArToast;
