import { Link, Outlet } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../Header.jsx';
import { useQuery, useMutation } from '@tanstack/react-query';
import { deleteEvent, fetchEvent, queryClient } from '../../util/http.js';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import { useState } from 'react';
import Modal from '../UI/Modal.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
export default function EventDetails() {
  const [isDeleting, setIsDeleting] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isPending } = useQuery({
    queryKey: ["event-details"],
    queryFn: ({ signal }) => fetchEvent({ signal, id })
  })

  const { mutate, isPending: isPendingDeletion, isError, error } = useMutation({
    mutationFn: () => deleteEvent({ id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"], refetchType: "none" })
      navigate("/events")
    }
  })

  const handleStartDelete = () => {
    setIsDeleting(true)
  }

  const handleStopDelete = () => {
    setIsDeleting(false)
  }

  const handleDelete = () => {
    mutate({ id: id });
  }
  return (
    <>
      {isDeleting &&
        <Modal onClose={handleStopDelete}>
          <h2>Are you sure?</h2>
          <p>Do you really want to delete this event?</p>
          <div className='form-actions'>
            {isPendingDeletion ?
              "Deleting event..."
              : <>
                <button className='button-text' onClick={handleStopDelete}>Cancel</button>
                <button className='button' onClick={handleDelete}>Delete</button>
              </>
            }
          </div>
          {isError && <ErrorBlock title="An error occurred" message={error.info?.message} />}
        </Modal>
      }
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      {isPending ? <LoadingIndicator /> :
        <article id="event-details">
          <header>
            <h1>{data.title}</h1>
            <nav>
              <button onClick={handleStartDelete}>Delete</button>
              <Link to="edit">Edit</Link>
            </nav>
          </header>
          <div id="event-details-content">
            <img src={"http://localhost:3000/" + data.image} alt="" />
            <div id="event-details-info">
              <div>
                <p id="event-details-location">{data.location}</p>
                <time dateTime={`Todo-DateT$Todo-Time`}>{data.time}</time>
              </div>
              <p id="event-details-description">{data.description}</p>
            </div>
          </div>
        </article>
      }
    </>
  );
}
