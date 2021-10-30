import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { RemoveImages } from "../redux/reducers/imageReducer";

function Picture() {
  const [pictures, setPictures] = React.useState(null);
  const images = useSelector((state) => state?.image?.images);
  const userId = useSelector((state) => state?.auth?.user?.id);
  const dispatch = useDispatch();
  const removeImages = () => {
    console.log("sadsad");
    dispatch(RemoveImages());
  };

  useEffect(() => {
    fetch(`https://gallery-be.herokuapp.com/picture/getAll/${userId}`)
      .then((res) => res.json())
      .then((res) => setPictures(res));
      console.log(pictures)
  }, []);
  return (
    <>
      <div id="gallery" style={{ marginTop: "5px" }}>
        {pictures?.length > 0 ?
          (pictures.map((data, key) => {
            const hrefLink = `#lightbox-${key}`;
            return (
              <div key={key}>
                <img src={data.link} />
                <a href={hrefLink}>{key + 1}</a>
              </div>
            );
          })) : <div className="empty__cont">
            <h1 className="empty__cont__msg">Please add some images first!</h1>
          </div>}
      </div>
      {pictures?.length > 0 ?
        (pictures.map((data, key) => {
          const id = `lightbox-${key}`;
          return (
            <div className="lightbox" id={id}>
              <div className="content">
                <img src={data.link} />
                {/* <div className="title">
                  <b>{key}</b> 
                </div> */}
                <a className="close" href="#gallery"></a>
              </div>
            </div>
          );
        })) : null}
    </>
  );
}

export default Picture;
