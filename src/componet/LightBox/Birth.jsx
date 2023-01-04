import React from 'react'
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";

function Birth(props) {
  return (
    <div>
           <Lightbox
        open={props.open}
        close={props.close}
        slides={[
          { src: "/image1.jpg" },
          { src: "/image2.jpg" },
          { src: "/image3.jpg" },
        ]}
      />
    </div>
  )
}

export default Birth