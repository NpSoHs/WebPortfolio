

export const FromattedDate = ({isMouseEnter, children}) => {
  return (
    <div >
        <span className={`text-sm ${isMouseEnter? "text-primaryTitle":""} d`}>
            {children}
        </span>
    </div>
  )
}

