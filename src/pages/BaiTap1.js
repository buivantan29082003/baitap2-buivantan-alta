import { useEffect, useRef, useState } from "react";

const Bai1 = () => {
  const canvasRef = useRef(null); 
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d"); 
    let witdh = 40; 
    ctx.clearRect(0, 0, canvas.width, canvas.height);  
    setInterval(() => { 
      ctx.beginPath();  
      ctx.arc(canvas.width / 2, canvas.height / 2, witdh / 2, 0, 2 * Math.PI);
      ctx.fillStyle = "blue";
      ctx.fill();
      ctx.lineWidth = 4; 
      if (witdh > 490) {
        ctx.clearRect(0, 0, canvas.width, canvas.height); 
        witdh = 10;
      } else {
        witdh += 3;
      } 
    }, 20);
  }, []);

  return <canvas ref={canvasRef} width={800} height={800} />;
};



export default Bai1;
