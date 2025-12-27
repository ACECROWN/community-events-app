import EventItem from './EventItem'

function EventList({ events }) {
  return (
    <div style={{ margin: '20px' }}>
      {events.length === 0 ? (
        <p>まだイベントはありません</p>
      ) : (
        events.map(event => <EventItem key={event.id} event={event} />)
      )}
    </div>
  )
}

export default EventList
