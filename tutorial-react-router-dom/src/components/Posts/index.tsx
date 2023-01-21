import { Outlet, useParams, useSearchParams } from "react-router-dom";

export const Posts = () => {
  const params = useParams();
  const { id } = params;
  const [qs, setQs] = useSearchParams();

  return (
    <div>
      <h1>
        Post {`Para: ${id}`} {`QS: ${qs.get("segunda")}`}
      </h1>
      <Outlet />
    </div>
  );
};
