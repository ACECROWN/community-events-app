import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import EventForm from './components/EventForm'
import EventList from './components/EventList'
import EventDetail from './pages/EventDetail'

function App() {
  const [events, setEvents] = useState([])

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <EventForm events={events} setEvents={setEvents} />
            <EventList events={events} />
          </>
        } />
        <Route path="/events/:id" element={<EventDetail events={events} />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
