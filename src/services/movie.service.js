const apiUrl = "https://reactjs-cdp.herokuapp.com";

export const sortByValues = {
  rating: "rating",
  releaseDate: "release_date"
};

export const fetchAll = async (offset, limit, sortBy, search, searchBy) => {
  let query = `offset=${offset}&limit=${limit}`;
  if(sortBy)
  {
    query += `sortBy=${sortBy}`;
  }  
  if(search)
  {
    if(searchBy)
    {
      query += `searchBy=${searchBy}`;
    }
    query += `search=${search}`;
  }  

  const response = await fetch(`${apiUrl}/movies?${query}`);
  return response.json();
}

export const fetchById = async id => {
  const response = await fetch(`${apiUrl}/movies/${id}`);
  return JSON.parse(response);
}