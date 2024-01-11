import React from "react";
import ReactSlider from "react-slider";
import './Slider.css';

function Settings() {
    return (
        <div style = {{textAlign:'left'}}>
            <label>work minutes:</label>
            <ReactSlider
                className = {'slider'}
                thumbClassName = {'thumb'}
                trackClassName = {'track'}
                values = {45}
                mins = {1}
                max = {120}
            />
            <label>break minutes:</label>
        </div>
    );
}

export default Settings;