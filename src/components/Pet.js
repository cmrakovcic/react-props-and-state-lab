import React from 'react'

class Pet extends React.Component {
  render() {
    console.log("pet", this.props  )
    const { name, type, age, weight, gender, isAdopted, id } = this.props.pet
    return (
      <div className="card">
        <div className="content">
          <h1 className="header">
            { gender === "female" ? '♀ ' : '♂  ' }
            {name}
          </h1>
          <div className="meta">
            <span className="date">PET TYPE</span>
          </div>
          <div className="description">
            <p>Age: {age} </p>
            <p>Weight: {weight} </p>
            <p>Type: {type} </p>
            <p>Gender: {gender} </p>
            <p>isAdopted: {isAdopted} </p>
            <p>id: {id} </p>
          </div>
        </div>
        <div className="extra content">
          {
            isAdopted ?
            <button className="ui disabled button">Already adopted</button>
              :
            <button className="ui primary button" onClick={ () => this.props.onAdoptPet(id) }> Adopt pet</button>
          }

        </div>
      </div>
    )
  }
}

export default Pet;