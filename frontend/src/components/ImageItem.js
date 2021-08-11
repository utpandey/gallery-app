import React from 'react'

function ImageItem({data}) {
    console.log(data)
    return (
             <a
                  //   href=
                  target="_blank"
                  className="gallery__link"
                >
                  <figure className="gallery__thumb">
                    <img
                      src={data.link}
                      alt="Portrait by Jessica Felicio"
                      className="gallery__image"
                    />
                    <figcaption className="gallery__caption">
                      Portrait by Jessica Felicio {data.createdAt}
                      {/* <button onClick={removeImages}>asdsad</button> */}
                    </figcaption>
                  </figure>
                </a>
    )
}

export default ImageItem
