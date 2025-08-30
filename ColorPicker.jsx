import React, { useState } from "react";

const Colorpicker = () => {
    const [selectedColor, setSelectedColor] = useState({ hex: null, name: null});
    const [focusedIndex, setFocusedIndex] = useState(null);

    const colors = [
        { hex: "#FF5733", name: "Red" },
        { hex: "#33FF57", name: "Green" },
        { hex: "#3357FF", name: "Blue" },
        { hex: "#F1C40F", name: "Yellow" },
        { hex: "#8E44AD", name: "Purple" },
        { hex: "#E67E22", name: "Orange" },
    ];

    const handleClick = (color) => {
        setSelectedColor(color);
    };

    const handleMouseEnter = (hex) => {
        setFocusedIndex(colors.findIndex(colors => colors.hex === hex));   
    };

    const handleMouseLeave = () => {
        setFocusedIndex(null);
    };
    
    const handleFocus = (index) => {
        setFocusedIndex(index);
    };

    const handleBlur = () => {
        setFocusedIndex(null);
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setSelectedColor(colors[index]);
        }
    };
    
    return (
        <div className="color-picker">
            <h1>Color Picker</h1>
        <div className="color-list">
            {colors.map((color, index) => (
                <div
                    key={index}
                    className={`color-item ${focusedIndex === index ? "focused" : ""}`}
                    style={{ backgroundColor: color.hex }}
                    onClick={() => handleClick(color)}
                    onMouseEnter={() => handleMouseEnter(color.hex)}
                    onMouseLeave={handleMouseLeave}
                    onFocus={() => handleFocus(index)}
                    onBlur={handleBlur}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    tabIndex={0}
                    >
                    {selectedColor.hex === color.hex && (<span className="color-code">{selectedColor.name || color.hex}</span>
                )}
                    </div>
            ))}
        </div>
    </div>
    );
};

export default Colorpicker;


                    