import { useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchEvents } from '../../util/http';
import LoadingIndicator from '../UI/LoadingIndicator';
import ErrorBlock from '../UI/ErrorBlock';
import EventItem from './EventItem';
export default function FindEventSection() {
  const searchElement = useRef();
  const [searchTerm, setSearchTerm] = useState();
  function handleSubmit(event) {
    event.preventDefault();

    setSearchTerm(searchElement.current.value)
  }

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["events", { search: searchTerm }],
    queryFn: ({ signal }) => fetchEvents({ signal, input: searchTerm }),
    enabled: searchTerm !== undefined
  })

  console.log(data)
  let content = <p>Please enter a search term and to find events</p>;

  if (isLoading) {
    content = <LoadingIndicator />
  }

  if (isError) {
    content = <ErrorBlock title="An error occurred" message={error.info?.message} />
  }

  if (data) {
    content = (<ul className='events-list'>
      {data.map((item) => {
        return <li key={item.id}><EventItem event={item} /></li>
      })}
    </ul>)

    console.log(content)
  }
  return (
    <section className="content-section" id="all-events-section">
      <header>
        <h2>Find your next event!</h2>
        <form onSubmit={handleSubmit} id="search-form">
          <input
            type="search"
            placeholder="Search events"
            ref={searchElement}
          />
          <button>Search</button>
        </form>
      </header>
      {content}
    </section>
  );
}
