import { useEffect, useRef, useState } from "react";

export default function Bai2() {
  const canvasRef = useRef(null);
  const [witdh, setWitdh] = useState({
    witdh: 10,
    indexBg: 0,
    backgrounds: ["red", "green", "blue", "yellow"],
  });
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const width = canvas.width;
    const height = canvas.height;
    setInterval(() => {
      if (witdh.witdh > 900) {
        witdh.w = 10;
        ctx.clearRect(0, 0, width, height);
        witdh.indexBg =
          witdh.indexBg + 1 < witdh.backgrounds.length ? witdh.indexBg + 1 : 0;
      }
      witdh.witdh += 3;
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, width, height);
      ctx.save();
      ctx.rotate(Math.PI / 10);
      ctx.transform(1, 0, 1, 1, 0, 0);
      const grad = ctx.createLinearGradient(0, 0, 700, 300);
      grad.addColorStop(0, witdh.backgrounds[witdh.indexBg]);
      grad.addColorStop(1, "white");
      ctx.fillStyle = grad;
      ctx.fillRect(100, 50, witdh.witdh, 100);
      ctx.restore();
    }, 20);
  }, []);

  return <canvas ref={canvasRef} width={1500} height={800} />;
}
