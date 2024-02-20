import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    console.log("Uppercase was clicked");

    setText(text.toUpperCase());
    //  setText(text.toLowerCase());
    // setText((prevText) =>
    //   prevText === prevText.toUpperCase()
    //     ? prevText.toLowerCase()
    //     : prevText.toUpperCase()
    // );
    props.showAlert("Converted to UpperCase");
  };
  const handleLowClick = () => {
    console.log("Uppercase was clicked");

    setText(text.toLowerCase());
    //  setText(text.toLowerCase());
    // setText((prevText) =>
    //   prevText === prevText.toUpperCase()
    //     ? prevText.toLowerCase()
    //     : prevText.toUpperCase()
    // );
    props.showAlert("Converted to LowerCase");
  };
  const handleClearClick = () => {
    console.log("Uppercase was clicked");

    setText("");
    props.showAlert("Text has been cleared");
  };

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  const handleinverseclick = () => {
    console.log("inverse click is triggered");
    let newtext = "";
    for (let i = text.length - 1; i >= 0; i--) {
      newtext += text[i];
    }
    setText(newtext);
    props.showAlert("Converted to Inverse");
  };
  const handleCopy = () => {
    let text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text has been Copied");
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? "white" : "black" }}
    >
      <h1 style={{ textAlign: "center", margin: 10 }}>{props.heading}</h1>

      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
          Enter your Text
        </label>
        <textarea
          className="form-control" // Corrected the class name to 'form-control'
          value={text}
          onChange={handleOnChange} // Corrected the attribute name to 'onChange'
          id="mybox"
          rows="8"
        ></textarea>
      </div>
      <button
        type="button"
        onClick={handleUpClick} // Corrected the attribute name to 'onClick'
        className="btn btn-primary mx-2"
      >
        Uppercase
      </button>

      <button
        type="button"
        onClick={handleLowClick} // Corrected the attribute name to 'onClick'
        className="btn btn-primary mx-2"
      >
        LowerCase
      </button>

      <button
        type="button"
        onClick={handleClearClick} // Corrected the attribute name to 'onClick'
        className="btn btn-primary mx-2"
      >
        Clear Text
      </button>

      <button
        type="submit"
        onClick={handleinverseclick}
        className="btn btn-secondary mx-2 my-2"
      >
        Inverse
      </button>

      <button
        type="submit"
        onClick={speak}
        className="btn btn-warning mx-2 my-2"
      >
        Speak
      </button>
      <button
        type="submit"
        onClick={handleCopy}
        className="btn btn-info mx-2 my-2"
      >
        Copy
      </button>

      <div className="container my-4">
        <h2>Your Text Summary </h2>
        <p>
          In the text field, there are {text.split(" ").length} Words and{" "}
          {text.length} characters.
        </p>
        <p>It will take {0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview:</h2>

        <p>
          {text.length > 0
            ? text
            : "Enter something in the above textbox to preview it here"}
        </p>
      </div>
    </div>
  );
}
