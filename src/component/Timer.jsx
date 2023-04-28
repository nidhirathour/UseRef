import { useState, useRef, useEffect } from "react";

function Timer(props) {
  //   let id; // re-created //will loose your old value ?  id=undefined
  const [timer, setTimer] = useState(0);
  let timerId = useRef(null); // timerId : {current:null}
  let h2Ref = useRef(null); // h2Ref={current:null} //h2Ref.current = document.getElementById()
  let startButton = useRef(null);
  let stopButton = useRef(null);

  useEffect(() => {
    if (timer === 0) {
      h2Ref.current.innerText = `Timer Value is ${timer}`;
      h2Ref.current.style.color = "black";
    } else {
      h2Ref.current.innerText = `Timer Started and Value is ${timer}`;
      h2Ref.current.style.color = "#54a0ff";
    }
  });

  //   useEffect(() => {
  //     var h2Ref = document.getElementById("timerid");
  //     if (timer === 0) {
  //       h2Ref.innerText = `Timer value is ${timer}`;
  //     } else {
  //       h2Ref.innerText = `Timer started and value is ${timer}`;
  //     }
  //   });
  const startTimer = () => {
    startButton.current.disabled = true;
    timerId.current = setInterval(() => {
      // id=  dummyid
      //   setTimer(timer + 1); // timer = 0

      setTimer((prevTimer) => prevTimer + 1); // 1.update the state 2.re-render
      //   h2Ref.innerText = `Timer started and Value is ${timer}`;
    }, 1000);
  };

  const stopTimer = () => {
    h2Ref.current.style.color = "red";
    startButton.current.disabled = false;
    clearInterval(timerId.current); //id = undefined
  };

  return (
    <div style={{ textAlign: "center", margin:"100px auto",boxShadow:"0px 0px 10px gray", width:"400px",height:"150px" }}>
      <h2 id="timerid" ref={h2Ref}>
        Timer is {timer}
      </h2>
      <br />
      <button style={{width:"100px",padding:"7px",border:"none",backgroundColor:"#1abc9c",fontSize:'20px',color:"white",fontWeight:"600",borderRadius:"6px"}} onClick={startTimer} ref={startButton}>
        Start
      </button>
      &nbsp;&nbsp;&nbsp;
      <button style={{width:"100px",padding:"7px",border:"none",backgroundColor:"#1abc9c",fontSize:'20px',color:"white",fontWeight:"600",borderRadius:"6px"}} onClick={stopTimer}>Stop</button>
    </div>
  );
}

export default Timer;