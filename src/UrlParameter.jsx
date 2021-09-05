import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  return (
    <div>
      <h1>This is the UrlParameter Page</h1>
      <p>Parameter is {id}</p>
      <p>Query Parameter is {query.get("name")}</p>
    </div>
  );
};
