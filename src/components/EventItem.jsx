import './EventItem.css'
import { Link } from 'react-router-dom'

function EventItem({ event }) {
  return (
    <div className="event-item">
      <Link to={`/events/${event.id}`} className="event-link">
        {event.title}
      </Link>
    </div>
  )
}

export default EventItem
