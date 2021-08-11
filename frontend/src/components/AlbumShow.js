import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import { useSelector } from "react-redux";

function AlbumShow({ showAlbumDisplay, setAlbumDisplay }) {
  const selectedAlbum = useSelector((state) => state?.album?.selectedAlbum);
  console.log(selectedAlbum);

  return (
    <>
      <AnimatePresence>
        {showAlbumDisplay ? (
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
              onClick={() => setAlbumDisplay(false)}
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
                <div id="gallery">
                  {selectedAlbum ?
                    selectedAlbum.map((data, key) => {
                      const hrefLink = `#lightbox-${key}`;
                      return (
                        <div key={key}>
                          <img src={data.link} />
                          <a href={hrefLink}>{key + 1}</a>
                        </div>
                      );
                    }) : <h1>Empty</h1>}
                </div>

                {selectedAlbum &&
                  selectedAlbum.map((data, key) => {
                    const id = `lightbox-${key}`;
                    return (
                      <div className="lightbox" id={id}>
                        <div className="content">
                          <img src={data.link} />
                          <a className="close" href="#gallery"></a>
                        </div>
                      </div>
                    );
                  })}
              </motion.div>
            </motion.div>
          </React.Fragment>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export default AlbumShow;
