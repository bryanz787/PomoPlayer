import React from "react";
import ReactSlider from "react-slider";
import './Slider.css';
import SettingsContext from "./SettingsContext";
import { useContext } from "react";
import BackButton from "./BackButton";

function Settings() {

    const settingsInfo = useContext(SettingsContext);

    return (
        <div style = {{textAlign:'left'}}>
            <label>work increment: {settingsInfo.workMinutes}:00</label>
            <ReactSlider
                className = {'slider red'}
                thumbClassName = {'thumb'}
                trackClassName = {'track'}
                value = {settingsInfo.workMinutes}
                onChange = {newValue => settingsInfo.setWorkMinutes(newValue)}
                mins = {1}
                max = {120}
            />
            <label>break increment: {settingsInfo.breakMinutes}:00</label>
            <ReactSlider
                className = {'slider green'}
                thumbClassName = {'thumb'}
                trackClassName = {'track'}
                value = {settingsInfo.breakMinutes}
                onChange = {newValue => settingsInfo.setBreakMinutes(newValue)}
                mins = {1}
                max = {120}
            />
            <div style = {{textAlign: 'center', marginTop: '20px'}}>
                <BackButton onClick = {() => settingsInfo.setShowSettings(false)}/>
            </div>
        </div>
    );
}

export default Settings;