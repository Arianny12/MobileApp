import './styles.css'
export default function RecipeInfo(props) {
  const {title} = props
  const {description} = props
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}
