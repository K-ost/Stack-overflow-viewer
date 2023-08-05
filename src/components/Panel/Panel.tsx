interface IPanel {
  children?: React.ReactNode
  title: string
}

const Panel: React.FC<IPanel> = ({ children, title }) => {
  return (
    <div className="results_container-col">
      <div className="results_container-col-head">{title}</div>
      <div className="results_container-col-body">
        {children}
      </div>
    </div>
  )
}

export default Panel
