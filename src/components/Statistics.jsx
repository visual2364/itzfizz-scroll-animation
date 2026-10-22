const statistics = [
  { value: '58%', description: 'Increase in pick-up point use' },
  { value: '23%', description: 'Decrease in customer phone calls' },
  { value: '27%', description: 'Increase in pick-up point use' },
  { value: '40%', description: 'Decrease in customer phone calls' },
]

function Statistics() {
  return (
    <div className="statistics grid grid-cols-2 gap-x-5 gap-y-5 lg:grid-cols-4 lg:gap-8" aria-label="Illustrative results">
      {statistics.map(({ value, description }, index) => (
        <div className="statistic" data-reveal key={value}>
          <span className="statistic-index">0{index + 1}</span>
          <p className="statistic-value">{value}</p>
          <p className="statistic-description">{description}</p>
        </div>
      ))}
    </div>
  )
}

export default Statistics