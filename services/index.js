export const exercisesOptions = {
  method: 'GET',
    headers: {
      'X-RapidAPI-Key': "9a783cfe36msh233fc86df7cf66ap188633jsnc0ee3040ad3d",
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions =  {
  method: 'GET',

  headers: {
    'X-RapidAPI-Key':"9a783cfe36msh233fc86df7cf66ap188633jsnc0ee3040ad3d",
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};
export async function getData(url, options) {
  const result = await fetch(url, options);
  const data = await result.json();
  return data;
}