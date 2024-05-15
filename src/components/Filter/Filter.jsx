import css from './Filter.module.css'

const Filter = ({onChange}) => {
  return (
    <input type="text" name="filter" onChange={onChange} placeholder="Filter..." className={css.input}/>
  )
}

export default Filter