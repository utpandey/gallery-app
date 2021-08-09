import React, { useState } from "react";
import axios from 'axios';
import "tui-image-editor/dist/tui-image-editor.css";
import ImageEditor from "@toast-ui/react-image-editor";
import Button from "react-bootstrap/Button";
const icona = require("tui-image-editor/dist/svg/icon-a.svg");
const iconb = require("tui-image-editor/dist/svg/icon-b.svg");
const iconc = require("tui-image-editor/dist/svg/icon-c.svg");
const icond = require("tui-image-editor/dist/svg/icon-d.svg");
const download = require("downloadjs");
const myTheme = {
  // "header.display": "none",
  "menu.backgroundColor": "white",
  "common.backgroundColor": "#151515",
  "downloadButton.backgroundColor": "white",
  "downloadButton.borderColor": "white",
  "downloadButton.color": "black",
  "menu.normalIcon.path": icond,
  "menu.activeIcon.path": iconb,
  "menu.disabledIcon.path": icona,
  "menu.hoverIcon.path": iconc,
};
function HomePage() {
  const [imageSrc, setImageSrc] = useState("");
  const imageEditor = React.createRef();
  // const inputImage = React.createRef();
  const saveImageToDisk = async () => {
    const imageEditorInst = imageEditor.current.imageEditorInst;
    const data = imageEditorInst.toDataURL();
    const { url } = await fetch("http://localhost:8080/s3Url").then((res) =>
      res.json()
    );
    console.log(data);
    if (data) {
      // setImageSrc(data);
      const mimeType = data.split(";")[0];
      const extension = data.split(";")[0].split("/")[1];
      console.log(mimeType);
      console.log(extension);
      console.log(download(data, `image.${extension}`, mimeType));
      download(data, `image.${extension}`, mimeType);
    }
    try {
      const buffer = Buffer.from(data.replace(/^data:image\/\w+;base64,/, ""),'base64');
      const result = await axios.put(url, buffer, {
        headers: {
          'Content-Type': 'image/*',
          "Content-Encoding": "base64",
          // even tried this
          // ConentEncoding: 'base64'
        },
      });
      console.log(result);
      console.log(result?.config?.data)
      setImageSrc(result?.config?.data)
      // console.log(imageSrc === result?.config?.data)
      return result;
    } catch (e) {
      console.log(e.message);
      throw new Error(e);
    }
    // await fetch(data)
    //   .then((res) => res.blob())
    //   .then((res) => console.log(res));
    // const result = await fetch(url, data, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //     "Content-Encoding": "base64",
    //   },
    // });
    // return result;
  };
  // useEffect(async () => {
  //   fetch(`http://localhost:8080/s3Url`, {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((response) => {
  //       console.log(response);
  //     });
  // }, []);
  // async function selectImage(event) {
  //   const file = event.target.files[0];
  //   const refInput = imageEditor.current.refInput;

  //   console.log(file);
  // }
  return (
    <div className="home-page">
      {/* <img src={"https://gallery-app-mern.s3.ap-south-1.amazonaws.com/0d679fdb1ac01128e8323a338f7a5d9c"} alt="imageToBeRenderedS3"/> */}
      <div className="center">
        <h1>Photo Editor</h1>
        <Button className="button" onClick={saveImageToDisk}>
          Save Image to Disk
        </Button>
      </div>
      {/* <input type="file" accept="image/*" onChange={(e) => selectImage(e)} ref={inputImage}/> */}
      <ImageEditor
        includeUI={{
          loadImage: {
            path: imageSrc,
            name: "image",
          },
          theme: myTheme,
          initMenu: "filter",
          menuBarPosition: "top",
          menu: ["crop", "flip", "rotate", "draw", "shape", "text", "filter"],
          uiSize: {
            height: `calc(100vh - 160px)`,
          },
        }}
        cssMaxHeight={window.innerHeight}
        cssMaxWidth={window.innerWidth}
        selectionStyle={{
          cornerSize: 20,
          rotatingPointOffset: 70,
        }}
        usageStatistics={true}
        ref={imageEditor}
      />
    </div>
  );
}
export default HomePage;
