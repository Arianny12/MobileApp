import { useState } from 'react'
import Dropdown from '../components/Dropdown'

const DATA_TO_FILTER = [
  {id: 1, name: 'Ari', team: 'red'},
  {id: 2, name: 'Katie', team: 'green'},
  {id: 3, name: 'Pete', team: 'blue'},
  {id: 4, name: 'Tyler', team: 'red'},
  {id: 5, name: 'Rose', team: 'green'},
  {id: 6, name: 'Billy', team: 'blue'}

]

const OPTIONS = [
  {label: 'Red', value: 'red'},
  {label: 'Green', value: 'green'},
  {label: 'Blue', value: 'blue'},
]

const DropdownPage = () => {
  const [value, setValue] = useState(null)

  // Array.filter returns a NEW array with only the items that tested true
  let filteredData = DATA_TO_FILTER
  if (value?.value){
    filteredData = DATA_TO_FILTER.filter(
      (student) => student.team === value.value
    )
  }
 
  const handleChange = (option) => {
    setValue(option)
  }

  const colorMap = {
    red: 'bg-red-500',
    blue: 'bg-blue-500',
    green: 'bg-green-400',
  }
  // or something like this but is more limited
  // `bg-${value?.value}-500`
  // vlaue.value.toLowerCase()

  // const thingToCheck = "I like chickens"
  // // if i want to check that this has the word chickens on it, i can do this
  // const exampleChecker = thingToCheck.toLowerCase().includes('chickens')
  // console.log(exampleChecker)

  return (
    <div>
      <h1 className="text-xl"> {value?.label}</h1>
      <Dropdown options={OPTIONS} value={value} onChange={handleChange}/>
      <h2 className={colorMap[value?.value]}>Students from {value?.label} team</h2>
      {filteredData.map((student) =>{
        return(<div key={student.id}>{student.name}</div>)
      })}
    </div>
  )
}

export default DropdownPage
