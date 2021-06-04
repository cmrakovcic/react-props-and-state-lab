import React from 'react'
import Filters from './Filters'
import PetBrowser from './PetBrowser'
import Pet from './Pet'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (selectedType) => {
    this.setState({
      filters: {
        type: selectedType.target.value
      }
    })
  }

  onFindPetsClick = () => {
      if (this.state.filters.type === "all") {
        fetch('/api/pets')
          .then(res => res.json())
          .then(res => {
            this.state.pets.push(res)
          }) }


        else if (this.state.filters.type === "dog") {
        fetch('/api/pets?type=dog')
          .then(res => res.json())
          .then(res => {
            this.state.pets.push(res)

          }) }

        else if (this.state.filters.type === "cat") {
          fetch('/api/pets?type=cat')
            .then(res => res.json())
            .then(res => {
              this.state.pets.push(res)

          }) }

        else if (this.state.filters.type === "micropig") {
          fetch('/api/pets?type=micropig')
            .then(res => res.json())
            .then(res => {
              this.state.pets.push(res)

          })}
        }

  onAdoptPet = (id) => {
      let petsArrayCopy = [ ...this.state.pets]
      let chosenPet = petsArrayCopy.find(p => p.id === id)
      chosenPet.isAdopted = true
      this.setState({
        pets: petsArrayCopy
      })
  }



  render(){
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onFindPetsClick={ this.onFindPetsClick } onChangeType={ this.onChangeType } />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={ this.onAdoptPet }/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;