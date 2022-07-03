const Section = ({section}) => {
  return(
      <section className="section">
        <h2>{section.category}</h2>
        <div>
          {section.images.map((picture, index) => {
            return(
              <img alt="preview" src={picture} key={index}/>
            )
          })}
        </div>
      </section>
  )
}

export default Section;