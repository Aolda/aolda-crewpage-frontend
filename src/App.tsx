import './App.css'
import Badge from './component/atoms/Badge'

function App() {

  return (
    <>
      <div>
        <Badge $theme="status">활동중</Badge>
        <Badge $theme="info">0기</Badge>
        <Badge $theme="info">소프트웨어 22학번</Badge>
      </div>

      <div>
        
      </div>
    </>
  )
}

export default App
