
import { FormEvent } from 'react'
import './App.css'

import useFetchGifts from 'presentation/modules/plp/hooks/useFetchGifts'


function App() {
  const { images, fetchGifts, isLoading } = useFetchGifts()

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    fetchGifts(event)
  }
  console.log('object', isLoading);
  console.log('images', images);
  return (
    <main>
      <h1>Gifts search</h1>
      <section>
        <form onSubmit={onSubmit}>
          <fieldset style={{ border: 0, marginBottom: '0.5rem' }}>
            <label htmlFor="search">Search: </label>
            <input type='text' name="search" id='search' />
          </fieldset>

          <button type='submit'>Buscar</button>
        </form>
      </section>
      <section>
        {isLoading ?
          <div className="spin" /> :
          images?.map(({ image: { alt, id, src } }) => <img key={id} src={src} alt={alt} />)
        }
      </section>
    </main>
  )
}

export default App
