import { Link, redirect, useNavigate, useNavigation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { fetchEvent, updateEvent, queryClient } from '../../util/http.js';
import { useParams } from 'react-router-dom';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import { useSubmit } from 'react-router-dom';
export default function EditEvent() {
  const navigate = useNavigate();
  const { state } = useNavigation()
  const { id } = useParams();
  const submit = useSubmit()

  /*  const { mutate } = useMutation({
     mutationFn: updateEvent,
     onMutate: async (data) => {
 
       await queryClient.cancelQueries({ queryKey: ['events', id] })
       const previousEvent = queryClient.getQueryData(['events', id])
       queryClient.setQueryData(['events', id], data.event);
 
       return { previousEvent }
     },
     onError: (error, data, context) => {
       queryClient.setQueryData(['events', id], context.previousEvent)
     },
     onSettled: () => {
       queryClient.invalidateQueries(['events', id])
     }
   }) */

  const { data, isError, error } = useQuery({
    queryKey: ['events', id],
    queryFn: ({ signal }) => fetchEvent({ signal, id }),
    staleTime: 10000
  })
  function handleSubmit(formData) {
    submit(formData, { method: 'PUT' });
  }

  function handleClose() {
    navigate('../');
  }

  return (
    <Modal onClose={handleClose}>

      <EventForm inputData={data} onSubmit={handleSubmit}>
        {state === "submitting" ? <p>Submitting....</p> :
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Update
            </button>
          </>
        }
      </EventForm>

      {isError && <ErrorBlock title="Error occurred" message={error.info?.message} />}

    </Modal>
  );
}

export function loader({ params }) {
  return queryClient.fetchQuery({
    queryKey: ['events', params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id })
  })
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const updatedEventData = Object.fromEntries(formData);
  await updateEvent({ id: params.id, event: updatedEventData });
  await queryClient.invalidateQueries(['events'])

  return redirect('../')
}