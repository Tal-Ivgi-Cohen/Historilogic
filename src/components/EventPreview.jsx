import axios from 'axios';
import { useEffect, useState } from 'react';

export const EventPreview = ({ event }) => {
  const [url, setUrl] = useState('')

  const parser = new DOMParser();
  const htmlString = event.no_year_html;
  const description = parser.parseFromString(htmlString, "text/html");


  useEffect(() => {
    const wiki = async () => {
      const res = await axios.get(`https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=1&prop=extracts|pageimages&pithumbsize=400&origin=*&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=${event.links[0].title}`);
      const data = Object.values(res.data.query.pages)
      if (data[0].thumbnail) setUrl(data[0].thumbnail.source)
      else setUrl('//cdn.pixabay.com/photo/2017/10/30/23/34/lamp-2903830_960_720.jpg')
    }
    wiki()
    // eslint-disable-next-line
  }, [])

  return (
    <div className='event-preview flex'>
      <div className='content-card flex column'>
        <div className="event-year">
          <p>{event.year}</p>
        </div>
        <div className="event-img">
        <img src={url} alt={url} />
        </div>
        <div className="event-desc">
        <p>{description.body.textContent}</p>
        </div>
      </div>
    </div>
  );
}
