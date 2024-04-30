import React from "react"

interface SubtitlePropsType {
  children: React.ReactNode
  styleClass?: string
}

function Subtitle({ children, styleClass }: SubtitlePropsType) {
  return <div className={`text-xl font-semibold ${styleClass}`}>{children}</div>
}

export default Subtitle
