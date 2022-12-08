import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getData } from "./service";

export const Page1 = () => {
  const { name } = useParams();

  const [result, setResult] = useState([]);

  const location = useLocation();
  console.log(location);
  const params = new URLSearchParams(location.search);

  const searchVal = params.get("search");
  const langVal = params.getAll("lang");

  console.log(langVal);

  useEffect(() => {
    getData().then((res) => {
      console.log(res);
      setResult(res.result_list);
    });
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h1>page 1</h1>

      {result.map((object) => {
        return (
          <div>
            <h1>{object.title}</h1>
            <p>{object.level}</p>
          </div>
        );
      })}
    </div>
  );
};
