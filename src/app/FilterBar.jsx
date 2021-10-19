import FilterByDate from "./components/FilterBar/FilterByDate"
import FilterByTag from "./components/FilterBar/FIlterByTag"

const FilterBar = props => {
  const { logs, onFilterByDate } = props

  return (
    <div className="filter-bar">
      <FilterByDate logs={logs} onSelectOption={onFilterByDate} />
      <FilterByTag logs={logs} />
    </div>
  )
}

export default FilterBar
