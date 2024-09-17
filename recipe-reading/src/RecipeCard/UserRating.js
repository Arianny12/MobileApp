import {useState} from 'react'
import {ReactComponent as Heart} from '@material-design-icons/svg/filled/favorite.svg'

export default function UserRating() {
  const [count, setCount] = useState(0)

  const handlePlusClick = () => {
    if (count < 5) {
      setCount(count + 1)
    }
    return
  }

  const handleMinusClick = () => {
    if (count > 0) {
      setCount(count - 1)
    }
    return
  }

  return (
    <div className= 'centerHearts'>
      {count > 0 && (<button onClick={handleMinusClick} disabled={count === 0}>[-]</button>)}
      <span>
        {/* {count} */}
        {[...Array(count)].map((heart, i) => {
          return (
            <span key="i">
              <Heart />
            </span>
          )
        })}
      </span>
      {count < 5 && (<button onClick={handlePlusClick} disabled={count === 5}>[+]</button>)}
    </div>
  )
}
