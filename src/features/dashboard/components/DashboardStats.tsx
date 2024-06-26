interface DashboardStatsPropsType {
  title: string
  icon: JSX.Element
  value: string | number
  description: string
}

function DashboardStats({
  title,
  icon,
  value,
  description,
}: DashboardStatsPropsType) {
  const getDescStyle = () => {
    if (description.includes("↗︎"))
      return "font-bold text-green-700 dark:text-green-300"
    else if (description.includes("↙"))
      return "font-bold text-rose-500 dark:text-red-400"
    else return "dark:text-slate-400"
  }

  return (
    <div className="stats shadow">
      <div className="stat">
        <div className={`stat-figure dark:text-slate-300 text-neutral`}>
          {icon}
        </div>
        <div className="stat-title dark:text-slate-300">{title}</div>
        <div className={`stat-value dark:text-slate-300 text-neutral`}>
          {value}
        </div>
        <div className={"stat-desc  " + getDescStyle()}>{description}</div>
      </div>
    </div>
  )
}

export default DashboardStats
