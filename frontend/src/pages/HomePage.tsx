import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import { RootState } from '../store'
import KanbanHeader from '../components/KanbanHeader';
import Board from '../components/Board';

const HomePage = () => {
  const {user} = useSelector((state: RootState) => state.auth);

  return (
    <div className='bg-gray-100 w-full h-full m-0'>
    <div className='flex flex-col'>
      <Navbar name='User Name' email='Kanbello.contact@gmail.com' />
      <div className='p-8'>
      <KanbanHeader/>
      <Board/>
      </div>
    </div>
    </div>
  )
}

export default HomePage