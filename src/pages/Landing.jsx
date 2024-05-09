import { useLoaderData } from 'react-router-dom'

export const loader = async () => {
  return 'some string'
}

export default function Landing() {
  const data = useLoaderData()
  console.log(data)
  return <div>Landing Page | Index Page</div>
}
