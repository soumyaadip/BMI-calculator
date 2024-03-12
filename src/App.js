
import './App.css';
import React,{useState} from "react"

function App() {

  //making state of our application

  const[weight,setWeight]=useState();
  const[height,setHeight]=useState();
  const[bmi,setBmi]=useState(' ');
  const[messege,setMessege]=useState(' ');


  //logic of our code

 let calbmi=(a)=>{
    a.preventDefault();
    if(weight === 0 || height === 0){
      alert("please enter a valid weight and height")
    }

    else{
      let bmi= (weight/(height*height)*703);
      setBmi(bmi.toFixed(1))



      if(bmi < 25){
        setMessege('you are under weight');
      }
      else if(bmi >= 25 && bmi<30){
        setMessege('you are a healthy weight')
      }

      else{
        setMessege('you are over weight');
      }
    }
 }


 //reload logic

 let reload =()=>{
  console.log("relod")
  window.location.reload();
 }








  return (
    <div className="App">

      <div className="container">
        <h2>BMI Calculator</h2>

        <form onSubmit={calbmi}>
              <div className='weight'>
                  <label>Weight(kg)</label>
                  <input required type="text" placeholder="Enter your weight" value={weight}
                  onChange={(a)=>setWeight(a.target.value)}/>
              </div>
              <div className='height'>
                <label>Height(cm)</label>
                <input required type="text" placeholder="Enter your Height" value={height}
                onChange={(event)=>setHeight(event.target.value)}/>
              </div>
              <div >
                <button className="btn" type="submit">Submit</button>
                <button className="btn btn-outline" onClick={reload} type="submit">Reload</button>
              </div>

              <div className="messeges">
                <h3>Your BMI is :{bmi}</h3>
                <p>{messege}</p>
              </div>
              

        </form>

      </div>
    </div>
  );
}

export default App;
