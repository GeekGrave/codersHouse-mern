import React, {useEffect, useState} from 'react';
import AddRoomModel from '../../components/AddRoomModel/AddRoomModel';
import RoomCard from '../../components/RoomCard/RoomCard';
import { getAllRooms } from '../../http';
import styles from './Rooms.module.css';

// const rooms = [
//   {
//       id: 1,
//       topic: 'Which framework works best for fronted?',
//       speakers: [
//           {
//               id: 1,
//               name: 'John Doe',
//               avatar: '/images/phone.png',
//           },
//           {
//               id: 2,
//               name: 'Shashi K',
//               avatar: '/images/monkey.png',
//           },
//       ],
//       totalPeople: 40,
//   },
//   {
//       id: 3,
//       topic: 'What\'s new in ML?',
//       speakers: [
//           {
//               id: 1,
//               name: 'Shah Rukh',
//               avatar: '/images/chashmish.png',
//           },
//           {
//               id: 2,
//               name: 'Bipasha',
//               avatar: '/images/monkey.png',
//           },
//       ],
//       totalPeople: 30,
//   },
//   {
//       id: 4,
//       topic: 'Why people use Stack OverFlow?',
//       speakers: [
//           {
//               id: 1,
//               name: 'Rahul',
//               avatar: '/images/chashmish.png',
//           },
//           {
//               id: 2,
//               name: 'Nishant',
//               avatar: '/images/mail.png',
//           },
//       ],
//       totalPeople: 12,
//   },
//   {
//       id: 5,
//       topic: 'AI is the Future?',
//       speakers: [
//           {
//               id: 1,
//               name: 'James',
//               avatar: '/images/phone.png',
//           },
//           {
//               id: 2,
//               name: 'Chris',
//               avatar: '/images/email.png',
//           },
//       ],
//       totalPeople: 39,
//   },
// ]

const Rooms = () => {

  const [showModel, setShowModel] = useState(false);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      const {data} = await getAllRooms();
      setRooms(data);
    }
    fetchRooms();
  }, [])
  

  function openModel(){
    setShowModel(true);
  }
  return (
    <>
      <div className='container'>
        <div className={styles.roomsHeader}>
          <div className={styles.left}>
            <span className={styles.heading}>All voice rooms</span>
            <div className={styles.searchBox}>
              <img src="/images/search-icon.png" alt="search" />
              <input type="text" className={styles.searchInput} />
            </div>
          </div>
          <div className={styles.right}>
            <button onClick={openModel} className={styles.startRoomButton}>
              <img src="/images/add-room-icon.png" alt="add-room" />
              <span>Start a room</span>
            </button>
          </div>
        </div>
        <div className={styles.roomList}>
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room}/>
          ))}
        </div>
      </div>
      {showModel && <AddRoomModel onClose={() => setShowModel(false)} />}
    </>
  )
}

export default Rooms