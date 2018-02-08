import { h, app } from 'hyperapp'
import './index.css'

const state = {
  starWarsPeople: []
}

const actions = {
  fetchStarWarsPeople: () => (state, actions) => {
    fetch('https://swapi.co/api/people/')
      .then(res => res.json())
      .then(data => actions.setStarWarsPeople(data))
  },
  setStarWarsPeople: ({ results }) => state => ({ starWarsPeople: results })
}

const view = (state, actions) => (
  <div>
    <h2>Get StarWars People</h2>
    <ul className="todo--ul">
      {state.starWarsPeople.map(p => <li className="todo--li">{p.name}</li>)}
    </ul>
    <button className="todo--button" onclick={actions.fetchStarWarsPeople}>
      Fetch People
    </button>
  </div>
)
app(state, actions, view, document.body)
