import './App.css'
import Badge from './component/atoms/Badge'
import HashTag from './component/atoms/HashTag'

function App() {

  return (
    <>
      <div>
        <Badge $theme="status">활동중</Badge>
        <Badge $theme="info">0기</Badge>
        <Badge $theme="info">소프트웨어 22학번</Badge>
      </div>

      <div>
        <HashTag completed $bgColor='#1A8EE5'>#</HashTag>
        <HashTag date='2025.08.15' $bgColor='black'>#</HashTag>
      </div>
    </>
  )
}

export default App
