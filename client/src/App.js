import React from "react";

function App() {
  const [colors, setColors] = React.useState(["#FFD500", "#FF0040"]);

  const colorStops = colors.join(", ");
  const backgroundImage = `linear-gradient(${colorStops})`;

  const handleColorChange = (index, newColor) => {
    const updatedColors = [...colors];
    updatedColors[index] = newColor;
    setColors(updatedColors);
  };

  const addColor = () => {
    setColors([...colors, "#FFFFFF"]); // Add a default white color
  };

  const removeColor = () => {
    if (colors.length > 1) {
      setColors(colors.slice(0, -1)); // Remove the last color
    }
  };

  return (
    <div className="wrapper">
      <div className="actions">
        <button onClick={removeColor}>Remove color</button>
        <button onClick={addColor}>Add color</button>
      </div>
      <div
        className="gradient-preview"
        style={{
          backgroundImage,
          height: "200px", // Added height for better visualization
          borderRadius: "8px", // Added border radius for a smoother look
        }}
      />
      <div className="colors">
        {colors.map((color, index) => {
          const colorId = `color-${index}`;
          return (
            <div key={colorId} className="color-wrapper">
              <label htmlFor={colorId}>Color {index + 1}:</label>
              <div className="input-wrapper">
                <input
                  id={colorId}
                  type="color"
                  value={color}
                  onChange={(e) => handleColorChange(index, e.target.value)}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: "12rem" }}>
        <div>Expected output</div>
        <video src="gradient-tool-demo.mp4" autoPlay controls />
      </div>
    </div>
  );
}

export default App;
