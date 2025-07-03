export default function Dashboard({ role }) {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-bold mb-4">Dashboard Overview</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Visible to all roles */}
        <div className="bg-electricBlue text-black rounded p-4 shadow">
          <p className="text-sm">Total Tickets</p>
          <h3 className="text-2xl font-bold">12</h3>
        </div>

        {/* Only for admin and operator */}
        {(role === 'admin' || role === 'operator') && (
          <div className="bg-trueBlue text-black rounded p-4 shadow">
            <p className="text-sm">Total Solved</p>
            <h3 className="text-2xl font-bold">8</h3>
          </div>
        )}

        {/* Only for admin */}
        {role === 'admin' && (
          <div className="bg-core text-black rounded p-4 shadow">
            <p className="text-sm">Total Approval</p>
            <h3 className="text-2xl font-bold">2</h3>
          </div>
        )}

        {/* Only for support */}
        {role === 'support' && (
          <div className="bg-extremePink text-black rounded p-4 shadow">
            <p className="text-sm">Total In Progress</p>
            <h3 className="text-2xl font-bold">2</h3>
          </div>
        )}

        {/* Only for user */}
        {role === 'user' && (
          <div className="bg-green-300 text-black rounded p-4 shadow">
            <p className="text-sm">My Tickets</p>
            <h3 className="text-2xl font-bold">4</h3>
          </div>
        )}
      </div>
    </div>
  );
}
