export const fetchData = async () => {
  return await fetch("/api/data").then(res => res.json());
};
