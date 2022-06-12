import React from 'react'

export default function SlideContent({ activeIndex, imageSlider }) {
  return (
    <section>
      {
        imageSlider.map((slide, index) => (
          <div key={index}
          className={index === activeIndex ? 'slides active' : 'inactive'}
          >
            <img src={slide.urls} alt='' />

          </div>
        ))
      }
      </section>
  )
}
