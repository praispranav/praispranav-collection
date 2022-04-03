import React, { useState } from "react";
import Footer from "../../components/common/footer";
import Head from "../../components/common/Header";
import TopNav from "../../components/common/TopNav";

export default function FormTesting() {
         const [state, setState] = useState(["Sahil", "Universe", "People","sss"] )
      
         const handleChangeText = (data:any, index:number) =>{
           const v = data.target.value;
           console.log(v);
      
           const arr = [...state]
           arr[index] = v
          
           setState(arr)
         }
      
         const addField = () => {
             const arr = [...state];
             arr.push("")
             setState(arr)
         }
      
         const submit = () => console.log(state);
      
         return (

           <>
             <TopNav />
             <Head />
      
             <div >
               {
                   state.map( (item:string, index:number)=> (
                       <input type="text" value={item} onChange={(e)=> handleChangeText(e, index)} />
                   ) )
               }
               <button onClick={addField}>
                   Add
               </button>
               <button onClick={submit}>
                   Submita
              </button>
              <button onClick={ addField}> clickme</button>
             </div>
             <Footer />
           </>
         );
       }
      
    
    
    

// export default function FormTesting() {
//     const [state, setState] = useState(["asbdsad", "askdsajd", "asdkashdaskj",""])
  
//     const handleChangeText = (data:any, index:number) =>{
//       const v = data.target.value;
//       console.log(v);
  
//       const arr = [...state]
//       arr[index] = v
//       // setValue(v);
//       setState(arr)
//     }
  
//     const addField = () => {
//         const arr = [...state];
//         arr.push("")
//         setState(arr)
//     }
  
//     const submit = () => console.log(state);
  
//     return (
//       <>
//         <TopNav />
//         <Head />
  
//         <div>
//           {
//               state.map( (item:string, index:number)=> (
//                   <input type="text" value={item} onChange={(e)=> handleChangeText(e, index)} />
//               ) )
//           }
//           <button onClick={addField}>
//               Add
//           </button>
//           <button onClick={submit}>
//               Submita
//           </button>
//         </div>
//         <Footer />
//       </>
//     );
//   }
  


