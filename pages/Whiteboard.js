import React, { useEffect, useRef, useState } from "react";

const Whiteboard = () => {
  const canvasRef = useRef(null);
  const ctx = useRef(null);
  const [color, setColor] = useState("black");
  const [isDrawing, setIsDrawing] = useState(false);
  const [clearCanvas, setClearCanvas] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    ctx.current = context;

    // Set the context's properties (line color, width, etc.)
    ctx.current.strokeStyle = color;
    ctx.current.lineWidth = 2;
    ctx.current.lineCap = "round";

    // Event listeners for drawing
    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mouseup", stopDrawing);
  }, [color]);

  useEffect(() => {
    if (clearCanvas) {
      ctx.current.clearRect(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
      setClearCanvas(false);
    }
  }, [clearCanvas]);

  const startDrawing = (e) => {
    if (e.button === 0) {
      // Check if the left mouse button (button 0) is clicked
      const canvas = canvasRef.current;
      ctx.current.beginPath();
      ctx.current.moveTo(
        e.clientX - canvas.offsetLeft,
        e.clientY - canvas.offsetTop
      );
      setIsDrawing(true);
    }
  };

  const stopDrawing = () => {
    ctx.current.closePath();
    setIsDrawing(false);
  };

  const draw = (e) => {
    if (!ctx.current || !isDrawing) return;

    const canvas = canvasRef.current;
    ctx.current.lineTo(
      e.clientX - canvas.offsetLeft,
      e.clientY - canvas.offsetTop
    );
    ctx.current.stroke();
  };

  const clearWhiteboard = () => {
    setClearCanvas(true);
  };

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  const eraser = () => {
    changeColor("white");
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center mb-4">
        <button
          onClick={clearWhiteboard}
          className="mr-4 p-2 bg-red-500 text-white"
        >
          Clear
        </button>
        <button onClick={eraser} className="mr-4 p-2 bg-gray-500 text-white">
          Eraser
        </button>
        <div>
          <input
            type="color"
            value={color}
            onChange={(e) => changeColor(e.target.value)}
          />
        </div>
      </div>
      <canvas
        ref={canvasRef}
        className="border border-gray-300"
        width={490} // Width can be adjusted based on available space
        height={400} // Height can be adjusted based on available space
        onMouseMove={draw}
      ></canvas>
    </div>
  );
};

export default Whiteboard;
