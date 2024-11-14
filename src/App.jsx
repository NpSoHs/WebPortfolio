import './App.css'
import LeftSection from './sections/LeftSection'
import RightSection from './sections/RightSection'


function App() {
  return (
    <>
      <div className='mx-auto max-w-6xl grid lg:grid-cols-[40%_60%] mt-14'>
        <LeftSection/>
        <RightSection/>
      </div>
    </>
  )
}

export default App
