import { useState } from "react";
import * as api from '../../utils/api';

const LocationForm = ({user}) => {
  const [ location, setLocation ] = useState({});
  const handleChange = ({target: {name, value}}) => {
    setLocation({
      ...location,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newLoc = await api.post(
      'http://localhost:3000',
      'api/v1/locations',
      location,
      { jwt: user.jwt, aud: user.aud }
    )
  }
  return (
    <div>
      <h5>Location Name</h5>
      <input type="text" onChange={handleChange}/>
      <h5>Difficulty Level</h5>
      <select name="difficulty" id="dificulty" onChange={handleChange}>
        <option value="Begginer">Begginer</option>
        <option value="Intermidiate">Intermediate</option>
        <option value="Advanced">Advanced</option>
        <option value="Expert">Expert</option>
      </select>
      <h5>Best Conditions</h5>
      <input type="text" onChange={handleChange}/>
      <h5>Best Swell Direction</h5>
      <input type="text" onChange={handleChange}/>
      <button type="button" onClick={handleSubmit}>Create Location</button>
    </div>
  )
}

export default LocationForm
