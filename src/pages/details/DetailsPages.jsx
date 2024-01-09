import React, { useState } from "react"
import "./details.css"
import "../../components/header/header.css"
import img from "../../assets/images/b5.jpg"
import { BsPencilSquare } from "react-icons/bs"
import { AiOutlineDelete } from "react-icons/ai"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { blog } from "../../assets/data/data"

export const DetailsPages = () => {
  const { id } = useParams()
  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    let blogs = blog.find((blogs) => blogs.id === parseInt(id))
    if (blogs) {
      setBlogs(blogs)
    }
  }, [])

  return (
    <>
      {blogs ? (
        <section className='singlePage'>
          <div className='container'>
            <div className='left'>
              <img src={blogs.cover} alt='' />
            </div>
            <div className='right'>
              <div className='buttons'>
                <button className='button'>
                  <BsPencilSquare />
                </button>
                <button className='button'>
                  <AiOutlineDelete />
                </button>
              </div>
              <h1>Blog on Nature</h1>
              <p>{blogs.desc}</p>
              <p>"In the hustle and bustle of modern life, nature offers a respite, a sanctuary where we can reconnect with our inner selves. Whether it be the tranquility of a forest, the rhythmic crashing of ocean waves, or the vibrant colors of a blooming meadow, nature has a healing power that calms our minds, reduces stress, and rejuvenates our spirits. Research has shown that spending time in nature can improve mental health, enhance creativity, and foster a sense of well-being.Nature is an extraordinary teacher, offering us invaluable lessons about resilience, adaptability, and harmony. Observe a seedling pushing through the cracks in concrete, witness a bird building a nest with precision and care, or witness the ebb and flow of tides – nature's wisdom is evident. Nature teaches us the importance of embracing change, finding beauty in simplicity, and living in harmony with the rhythms of life. It reminds us of our place in the grand tapestry of existence and encourages us to cherish and protect our planet.Nature is not a separate entity from us; it is an integral part of our existence. It nourishes our souls, sustains our physical well-being, and offers boundless inspiration. It is a reminder of the inherent beauty and resilience of life. By embracing nature's splendor, recognizing our interconnectedness, and taking responsibility for its preservation, we can forge a harmonious relationship with the natural world. Let us cherish, protect, and celebrate the wonders of nature, ensuring a sustainable and thriving planet for generations to come."</p>
              <p>Author: Shruthi</p>
            </div>
          </div>
        </section>
      ) : null}
    </>
  )
}
