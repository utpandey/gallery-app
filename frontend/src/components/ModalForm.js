import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { albumNew } from "../utils/albumApi";
import { useSelector, useDispatch } from "react-redux";

const ModalForm = ({ showModal, setModal, setLoading, setError }) => {
  const userId = useSelector((state) => state?.auth?.user?.id);
  const [pictures, setPictures] = React.useState(null);
  const [title, setTitle] = useState("");
  const [selectedPictures, setSelectedPictures] = useState([]);
  const [selectedImageClass, setSelectedImageClass] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:8080/picture/getAll/${userId}`)
      .then((res) => res.json())
      .then((res) => setPictures(res));
  }, []);
  const addImage = (data) => {
    console.log(data);
    let newData = [...selectedPictures];
    newData.push(data);
    setSelectedPictures(newData);
  };
 
  const handleSubmit = () => {
    console.log("handleSubmit");
    const albumData = { userId, title, selectedPictures };
    albumNew(albumData);
  };
  console.log(selectedPictures)
  return (
    <AnimatePresence>
      {showModal ? (
        <React.Fragment>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                delay: 0.3,
              },
            }}
            onClick={() => setModal(false)}
            className="modal-backdrop"
          />
          <motion.div
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{
              scale: 0,
              transition: {
                delay: 0.3,
              },
            }}
            className="modal-content-wrapper-album"
          >
            <motion.div
              className="modal-content"
              initial={{
                x: 60,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  delay: 0.3,
                  duration: 0.3,
                },
              }}
              exit={{
                x: 60,
                opacity: 0,
                transition: {
                  duration: 0.3,
                },
              }}
            >
              <form onSubmit={handleSubmit} className="modal__cont">
                <h1 className="modal__cont__title">Album Details</h1>
                <div className="modal__cont__inputCont">
                  <input
                    type="text"
                    name="batchId"
                    // value={batchId}
                    onChange={(e) => setTitle(e.target.value)}
                    // onChange={(e)=> setTitle({...{batchId}, batchId: e.target.value})}
                    id="batchId"
                    className="modal__cont__inputCont__input"
                    required={true}
                    placeholder="Album Title"
                  />
                </div>
                <input
                  type="submit"
                  value="Submit"
                  className="modal__cont__submitBtn"
                />
              </form>
              <div id="gallery" style={{ marginTop: "5px" }}>
                {pictures &&
                  pictures.map((data, key) => {
                    const hrefLink = `#lightbox-${key}`;
                    return (
                      <div key={key} onClick={() => addImage(data)}>
                        <img src={data.link} />
                        <a href={hrefLink}>{key + 1}</a>
                        <input
                          className="category-input"
                          type="checkbox"
                          id="checker"
                          name="categories[]"
                          value=""
                        />
                        <label htmlFor="checker" />
                        <input type="hidden" name="categoryFiles[]" value="" />
                      </div>
                    );
                  })}
              </div>
              {/* {pictures &&
                pictures.map((data, key) => {
                  const id = `lightbox-${key}`;
                  return (
                    <div className="lightbox" id={id}>
                      <div className="content">
                        <img src={data.link} />
                        <a className="close" href="#gallery"></a>
                      </div>
                    </div>
                  );
                })} */}
            </motion.div>
          </motion.div>
        </React.Fragment>
      ) : null}
    </AnimatePresence>
  );
};

export default ModalForm;
