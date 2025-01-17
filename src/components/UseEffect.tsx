import { FC, useState, useEffect } from "react";

interface UseEffectProps {}

const UseEffect: FC<UseEffectProps> = ({}) => {
  const [resourceType, setResourceType] = useState<string>("posts");
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch data based on resourceType
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/${resourceType}`
        );
        if (!response.ok) {
          setError("Response not received");
        }
        setData(await response.json());
      } catch (error) {
        setError("Something went wrong!");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [resourceType]); // Dependency: triggers when resourceType changes

  return (
    <section className="p-5">
      <div>
        {/* Buttons for selecting resource type */}
        <button
          onClick={() => setResourceType("posts")}
          className="px-4 py-2 bg-blue-500 text-white rounded m-2"
        >
          Posts
        </button>
        <button
          onClick={() => setResourceType("users")}
          className="px-4 py-2 bg-green-500 text-white rounded m-2"
        >
          Users
        </button>
        <button
          onClick={() => setResourceType("comments")}
          className="px-4 py-2 bg-yellow-500 text-white rounded m-2"
        >
          Comments
        </button>
      </div>

      <h1 className="text-2xl font-bold my-4">
        Selected Resource: {resourceType}
      </h1>

      {/* Explanation Container */}
      <div className="my-5 bg-gray-100 p-5 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">How useEffect Works:</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>
            <b>useEffect Hook:</b> The <code>useEffect</code> hook allows you to
            perform side effects in function components. It runs after the
            component renders, allowing you to manage things like data fetching,
            subscriptions, or manually changing the DOM.
          </li>
          <li>
            <b>Dependency Array:</b> The <code>useEffect</code> hook takes a
            dependency array. If the values inside the array change, the effect
            runs again. In our case, the effect depends on{" "}
            <code>resourceType</code>.
          </li>
          <li>
            <b>Effect Trigger:</b> In this example, every time the{" "}
            <code>resourceType</code> state changes (for example, when "Posts",
            "Users", or "Comments" are clicked), the <code>useEffect</code>{" "}
            runs, fetching data and displaying it on the page.
          </li>
          <li>
            <b>Optimized Rerenders:</b> If the same resource type button is
            clicked multiple times, the effect will only rerun once, as the
            resource type has not changed.
          </li>
        </ol>
      </div>

      {/* Data Fetching Example */}
      <div className="my-5 bg-gray-100 p-5 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">
          Data Fetching using useEffect: ( Using jsonplaceholder sites data )
        </h3>
        <p className="mb-2">
          When the resource type changes, we fetch the corresponding data:
        </p>

        {/* Loading State */}
        {loading && <p>Loading...</p>}

        {/* Error Handling */}
        {error && <p className="text-red-500">{error}</p>}

        {/* Data Display */}
        {!loading && !error && (
          <ul>
            {data.slice(0, 5).map((item: any, index) => (
              <li key={index} className="py-2">
                {resourceType === "posts" ? (
                  <div>
                    <b>{item.title}</b>
                    <p>{item.body}</p>
                  </div>
                ) : resourceType === "users" ? (
                  <div>
                    <b>{item.name}</b>
                    <p>{item.email}</p>
                  </div>
                ) : (
                  <div>
                    <b>Comment by {item.name}</b>
                    <p>{item.body}</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default UseEffect;
