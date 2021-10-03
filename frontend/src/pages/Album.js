import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import ModalForm from "../components/ModalForm";
import Snackbar from "../components/Snackbar";
import { RemoveImages } from "../redux/reducers/imageReducer";
import { SelectedAlbum } from "../redux/reducers/albumReducer";
import AlbumShow from "../components/AlbumShow";
import empty from "../assets/empty.png";

import { getSpecificAlbum } from "../utils/albumApi";

function Album() {
  const [albums, setalbums] = useState(null);
  const [pictures, setPictures] = useState(null);
  const [showAlbumDisplay, setAlbumDisplay] = useState(false);
  const [showModal, setModal] = useState(false);
  const [error, setError] = useState({
    isError: false,
    errorMessage: "",
  });
  const images = useSelector((state) => state?.image?.images);
  const userId = useSelector((state) => state?.auth?.user?.id);
  const albumsArray = useSelector((state) => state?.album?.album);
  const selectedAlbumRedux = useSelector(
    (state) => state?.album?.selectedAlbum
  );
  const dispatch = useDispatch();

  const removeImages = () => {
    console.log("sadsad");
    dispatch(RemoveImages());
  };

  const selectAnAlbum = (images) => {
    console.log(images);
    setAlbumDisplay((prevValue) => !prevValue);
    dispatch(SelectedAlbum(images));
  };

  const clearError = () => {
    setError({
      isError: false,
      errorMessage: "",
    });
  };

  const specificAlbum = (albumId) => {
    console.log(albumId);
    setAlbumDisplay((prevValue) => !prevValue);
    getSpecificAlbum(albumId);
  };

  useEffect(() => {
    fetch(`https://gallery-be.herokuapp.com/picture/getAll/${userId}`)
      .then((res) => res.json())
      .then((res) => setPictures(res));
  }, []);
  return (
    <div>
      <button
        className="button"
        onClick={() => setModal((prevValue) => !prevValue)}
        style={{
          cursor: "pointer",
          position: "absolute",
          right: "0px",
          padding: "10px",
          marginRight: "35px",
          fontSize: "20px",
          color: "white",
          backgroundColor: "red",
          border: "none",
        }}
      >
        Add new album
      </button>
      <div className="wrapper group">
        <section id="content">
          <ul className="grid half-width group">
            {images ? (
              <>
                <li
                  className="zoom-on-hover"
                  onClick={() => selectAnAlbum(images)}
                >
                  <a>
                    <div className="image">
                      <img src={images[0].link} />
                      <div className="caption">
                        <h2>All</h2>
                      </div>
                    </div>
                  </a>
                </li>
              </>
            ) : (
              <>Please add images first!</>
            )}
            {albumsArray
              ? albumsArray.map((data, key) => {
                  console.log(data);
                  return (
                    <li
                      className="zoom-on-hover"
                      key={key}
                      onClick={() => specificAlbum(data._id)}
                    >
                      <a>
                        <div className="image">
                          {data.images.length < 1 ? (
                            <img src={empty} />
                          ) : (
                            <img
                              src={`https://picsum.photos/id/${key}/200/300`}
                            />
                          )}
                          <div className="caption">
                            <h2>{data.title}</h2>
                          </div>
                        </div>
                      </a>
                    </li>
                  );
                })
              : null}
          </ul>
        </section>
      </div>
      <AlbumShow
        showAlbumDisplay={showAlbumDisplay}
        setAlbumDisplay={setAlbumDisplay}
      />
      <ModalForm
        showModal={showModal}
        setModal={setModal}
        setError={setError}
      />
      {error.isError && (
        <Snackbar
          status="error"
          message={error.errorMessage}
          clearError={clearError}
        />
      )}
    </div>
  );
}

export default Album;
