import { useEffect, useState } from "react";

const baseURL = import.meta.env.VITE_API_BASE_URL;

type Contact = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
};

function AdminContact() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const contactsPerPage = 5; // adjust as needed

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await fetch(`${baseURL}/api/contact`);
        const data = await res.json();
        setContacts(data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  // Pagination logic
  const indexOfLast = currentPage * contactsPerPage;
  const indexOfFirst = indexOfLast - contactsPerPage;
  const currentContacts = contacts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(contacts.length / contactsPerPage);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Contact Submissions</h2>

      {loading ? (
        <p>Loading...</p>
      ) : currentContacts.length > 0 ? (
        <>
          {/* ✅ Table for md+ screens */}
          <div className="hidden md:block">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200 text-black text-left">
                  <th className="border border-gray-300 px-4 py-2">Name</th>
                  <th className="border border-gray-300 px-4 py-2">Email</th>
                  <th className="border border-gray-300 px-4 py-2">Phone</th>
                  <th className="border border-gray-300 px-4 py-2">Message</th>
                  <th className="border border-gray-300 px-4 py-2">Date</th>
                </tr>
              </thead>
              <tbody>
                {currentContacts.map((contact) => (
                  <tr key={contact._id}>
                    <td className="border border-gray-300 px-4 py-2">
                      {contact.name}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {contact.email}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {contact.phone}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {contact.message}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {new Date(contact.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ✅ Card view for mobile */}
          <div className="space-y-4 md:hidden">
            {currentContacts.map((contact) => (
              <div
                key={contact._id}
                className="border rounded-lg shadow-sm p-4 bg-white text-black"
              >
                <p className="font-semibold">{contact.name}</p>
                <p className="text-sm">{contact.email}</p>
                <p className="text-sm">{contact.phone}</p>
                <p className="mt-2">{contact.message}</p>
                <p className="text-xs text-gray-500 mt-2">
                  {new Date(contact.createdAt).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center gap-2 mt-4 flex-wrap">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, idx) => (
              <button
                key={idx + 1}
                onClick={() => setCurrentPage(idx + 1)}
                className={`px-3 py-1 border rounded ${
                  currentPage === idx + 1
                    ? "bg-[var(--primary-color)] text-white"
                    : "bg-white"
                }`}
              >
                {idx + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <p>No contacts found.</p>
      )}
    </div>
  );
}

export default AdminContact;
