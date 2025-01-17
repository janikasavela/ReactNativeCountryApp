import { useEffect, useState } from 'react'

const fetchCountries = async () => {
  const response = await fetch(
    'https://studies.cs.helsinki.fi/restcountries/api/all'
  )
  const json = await response.json()

  return json
}

const useCountries = () => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const fetcedCountries = await fetchCountries()
      setCountries(fetcedCountries)
      console.log('HOOKISSA!!!:', fetcedCountries[0])
    }

    fetchData()
  }, [])

  return [countries]
}

export default useCountries
