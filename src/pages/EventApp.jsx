import { useEffect, useState } from 'react';
import { EventList } from '../components/EventList';
import { dataService } from '../services/data.service.js'
import { Loader } from '../components/Loader.jsx';

export const EventApp = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await dataService.query()
      setEvents(data)
    }
    fetchData()
    // eslint-disable-next-line
  }, [])

  if (!events) return <Loader />;
  return (
    <div>
      <div className='main-container'>
        <section className='event-container'>
          <main>
            {/*Here you can choose between Events, Births and Deaths*/}
            <EventList events={events?.data?.Events} />
            {/*<EventList events={events?.data?.Births} />*/}
            {/* <EventList events={events?.data?.Deaths} />*/}
          </main>
        </section>
      </div>
    </div>
  );
}