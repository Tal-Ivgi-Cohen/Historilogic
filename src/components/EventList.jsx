import { EventPreview } from './EventPreview.jsx';
import { Loader } from './Loader.jsx';

export const EventList = ({ events }) => {
    if (!events) return <Loader />;
    return (
        <section className="event-list-container">
            <div className="event-list">
              {events?.map(event => <EventPreview event={event} key={event.text} />)}
            </div>
        </section>
    )
}