import React, { useState, useEffect } from "react";

//? Import Styles
import "./styles/App.scss";
//      Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//! Import Components
import FormComponent from "./components/Form";
import { Jumbotron, Alert } from "react-bootstrap";

const App = () => {
    var speedTypes = ["Kilobit", "Megabit", "Gigabit", "Kilobyte", "Megabyte", "Gigabyte"];
    var fileTypes = ["Kilobyte", "Megabyte", "Gigabyte", "Terabyte"];
    var [inputSpeed, setInputSpeed] = useState("100");
    var [inputType, setInputType] = useState(speedTypes[1]);
    var [fileSize, setFileSize] = useState("1");
    var [fileType, setFileType] = useState(fileTypes[2]);
    var [time, setTime] = useState("0");

    useEffect(() => {
        function secondsToDhms(seconds) {
            if (seconds > 0) {
                var d = Math.floor(seconds / (3600 * 24));
                var h = Math.floor((seconds % (3600 * 24)) / 3600);
                var m = Math.floor((seconds % 3600) / 60);
                var s = Math.floor(seconds % 60);

                var dDisplay = d > 0 ? d + (d === 1 ? " day, " : " days, ") : "";
                var hDisplay = h > 0 ? h + (h === 1 ? " hour, " : " hours, ") : "";
                var mDisplay = m > 0 ? m + (m === 1 ? " minute, " : " minutes, ") : "";
                var sDisplay = s > 0 ? s + (s === 1 ? " second" : " seconds") : "";
                return dDisplay + hDisplay + mDisplay + sDisplay;
            } else if (seconds === 0) {
                return "Under a second";
            } else if (seconds === Infinity) {
                return "Infinite";
            } else {
                return "Error";
            }
        }

        function sizes(input, type) {
            switch (type) {
                case fileTypes[0]:
                    return input;
                case fileTypes[1]:
                    return input * 1000;
                case fileTypes[2]:
                    return input * 1000000;
                case fileTypes[3]:
                    return input * 1000000000;
                default:
                    console.log("Default");
                    return input;
            }
        }

        function speeds(number, unit) {
            switch (unit) {
                case speedTypes[0]:
                    number = number / 8;
                    return number;
                case speedTypes[1]:
                    number = number / 8;
                    return number * 1000;
                case speedTypes[2]:
                    number = number / 8;
                    return number * 1000000;
                case speedTypes[3]:
                    return number;
                case speedTypes[4]:
                    return number * 1000;
                case speedTypes[5]:
                    return number * 1000000;
                default:
                    console.log("Default");
                    return number;
            }
        }

        var secs = sizes(fileSize, fileType) / speeds(inputSpeed, inputType);
        setTime(secondsToDhms(Math.floor(secs)));
    }, [inputSpeed, inputType, fileSize, fileType, speedTypes, fileTypes]);
    return (
        <main>
            <Jumbotron>
                <h1>Download Time Calculator</h1>
                <hr />
                <Alert variant="primary">Calculate your time to download files or games easily</Alert>
                <FormComponent
                    inputSpeed={inputSpeed}
                    setInputSpeed={setInputSpeed}
                    inputType={inputType}
                    setInputType={setInputType}
                    speedTypes={speedTypes}
                    fileSize={fileSize}
                    setFileSize={setFileSize}
                    fileType={fileType}
                    setFileType={setFileType}
                    fileTypes={fileTypes}
                    time={time}
                />
                <hr />
                <Alert variant="secondary">
                    <a href="https://salkin.at/" variant="primary">
                        Niklas Wonnebauer
                    </a>
                </Alert>
            </Jumbotron>
        </main>
    );
};

export default App;
