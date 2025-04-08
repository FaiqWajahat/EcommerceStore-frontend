import toast from "react-hot-toast"

const handleSuccess=(msg)=>{
    toast.success(msg);
}

const handleError=(msg)=>{
toast.error(msg);
}

const handlePromiss= async(loadMsg ,sucessMsg)=>{
   let myPromise = new Promise((resolve) => {
        setTimeout(() => {
          resolve("sucess");
        }, 1000);
      });
      await toast.promise(
        myPromise,
        {
          loading: loadMsg,
          success: sucessMsg,
          error: "Something whent Wrong",
        },
      
      );
}

export {handleSuccess,handleError,handlePromiss};