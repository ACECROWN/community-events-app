import './EventForm.css'

function EventForm({ events, setEvents }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    const title = e.target.title.value
    const date = e.target.date.value
    const location = e.target.location.value
    const description = e.target.description.value
    if (!title) return
    setEvents([...events, { id: events.length + 1, title, date, location, description }])
    e.target.reset()
  }

  return (
    <div className="event-form-wrapper">
      <form className="event-form" onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="イベントタイトル" />
        <input type="date" name="date" placeholder="日付" />
        <input type="text" name="location" placeholder="場所" />
        <textarea name="description" placeholder="説明"></textarea>
        <button type="submit">投稿</button>
      </form>
    </div>
  )
}

export default EventForm
