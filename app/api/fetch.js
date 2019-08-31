const fetchSearchedData = async (query, selection) => {
  console.log('query', query, selection);
  try {
    const res = await fetch(
      `https://api.github.com/search/repositories?q=${query}+language:${selection}&sort=stars&order=desc`,
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export default fetchSearchedData;
