import { useParams, Link } from 'react-router-dom'

function EventDetail({ events }) {
  const { id } = useParams()
  const event = events.find(e => e.id === parseInt(id))

  if (!event) {
    return (
      <div style={{ margin: '20px' }}>
        <p>イベントが見つかりません</p>
        <Link to="/">一覧に戻る</Link>
      </div>
    )
  }

  return (
    <div style={{ margin: '20px' }}>
      <h2>{event.title}</h2>
      <p><strong>日付:</strong> {event.date}</p>
      <p><strong>場所:</strong> {event.location}</p>
      <p><strong>説明:</strong> {event.description}</p>
      <Link to="/" style={{ display: 'inline-block', marginTop: '20px', textDecoration: 'underline', color: 'blue' }}>
        一覧に戻る
      </Link>
    </div>
  )
}

export default EventDetail
