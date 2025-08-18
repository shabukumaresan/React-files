import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'

const Test1 = () => {
  const [url, setUrl] = useState("");
  const repo1 = useQuery({
  queryKey: 
  [
    "githubData",
    url,
  ],
  queryFn: apiCall,
  enabled: !!url,
  });

  const repo2 = useQuery({
    queryKey:
    [
      "githubData",
      "https://api.github.com/repos/antonfrancisjeejo/news-app-react-alan-ai",
    ],
    queryFn: apiCall,
  })

  function apiCall({queryKey}) {
    if (queryKey[1]){
      return fetch(queryKey[1]).then((res) => res.json());
    }
    throw new Error("URL is missing");
  } 

  if (repo2.isLoading || repo1.isLoading) {
    return <h1>Loading...</h1>;
  }

  if (repo2.error || repo1.error) {
    return <h1>An error occured</h1>
  }

  // console.log("Repo1:",repo1.data);
  // console.log("Repo2 :",repo2.data);

  return (
    <div>
      {repo1.data && (
        <div>
          <h1>Repo name: {repo1.data.name}</h1>
          <h3>Repo forks: {repo1.data.forks}</h3>
          <h3>Repo stars: {repo1.data.stargazers_count}</h3>
          <h3>Repo subscribers: {repo1.data.subscribers_count}</h3>
        </div>
      )}
      {repo2.data &&(
        <div>
          <h1>Repo name: {repo2.data.name}</h1>
          <h3>Repo forks: {repo2.data.forks}</h3>
          <h3>Repo stars: {repo2.data.stargazers_count}</h3>
          <h3>Repo subscribers: {repo2.data.subscribers_count}</h3>
        </div>
      )}
      <button onClick={() => setUrl("https://api.github.com/repos/antonfrancisjeejo/tinder-clone-expo-app")}>Update</button>
    </div>
  )
}

export default Test1