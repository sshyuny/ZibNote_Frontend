export const fetchGetMethod = async (url: string, errMessage: string) => {
  const token = localStorage.getItem("token");

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error(errMessage);
  return res.json();
};

export const fetchWithBody = async (
  url: string,
  method: string,
  body: any,
  errMessage: string,
) => {
  const token = localStorage.getItem("token");

  const res = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
    credentials: "include",
  });

  if (!res.ok) throw new Error(errMessage);
  return res.json();
};
