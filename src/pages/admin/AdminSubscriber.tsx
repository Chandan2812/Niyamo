import { useEffect, useState } from "react";
import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;

// ✅ Define a type for subscriber
type Subscriber = {
  _id: string;
  email: string;
  createdAt: string;
};

function AdminSubscriber() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 10; // records per page

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${baseURL}/subscribers`, {
          params: { page, limit },
        });

        // ✅ assumes backend returns { data: [], totalPages: n }
        setSubscribers(res.data.data || res.data);
        setTotalPages(res.data.totalPages || 1);
      } catch (err) {
        console.error("Error fetching subscribers:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSubscribers();
  }, [page]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Subscribers</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <table className="w-full border border-gray-300">
            <thead className="bg-gray-100 text-black">
              <tr>
                <th className="p-2 border">#</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">Date</th>
              </tr>
            </thead>
            <tbody>
              {subscribers.length > 0 ? (
                subscribers.map((sub, index) => (
                  <tr key={sub._id}>
                    <td className="p-2 border">
                      {(page - 1) * limit + (index + 1)}
                    </td>
                    <td className="p-2 border">{sub.email}</td>
                    <td className="p-2 border">
                      {new Date(sub.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  {/* ✅ colSpan must be a number, not string */}
                  <td colSpan={3} className="text-center p-4">
                    No subscribers found
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center gap-2 mt-4">
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Prev
            </button>
            <span>
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              disabled={page === totalPages}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default AdminSubscriber;
