const fetchSearchedData = async query => {
  console.log('query', query);
  try {
    const res = await fetch(
      `https://api.github.com/search/repositories?q=${query}+language:javascript&sort=stars&order=desc`,
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export default fetchSearchedData;
