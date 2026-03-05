import { motion } from 'motion/react';
import { Users, Shield, Key, UserPlus } from 'lucide-react';

const users = [
  { id: 1, name: 'Admin User', role: 'Administrator', email: 'admin@fininterop.rw', status: 'Active' },
  { id: 2, name: 'John Doe', role: 'Analyst', email: 'john.d@fininterop.rw', status: 'Active' },
  { id: 3, name: 'Jane Smith', role: 'Developer', email: 'jane.s@fininterop.rw', status: 'Inactive' },
  { id: 4, name: 'Regulator A', role: 'Auditor', email: 'audit@bnr.rw', status: 'Active' },
];

export function Admin() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">User & Role Management</h2>
          <p className="text-gray-400">Control access and permissions.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white transition-colors">
          <UserPlus className="w-4 h-4" />
          Add User
        </button>
      </div>

      <div className="bg-white/5 border border-white/5 rounded-xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-black/20 text-gray-400 text-sm uppercase font-medium">
            <tr>
              <th className="px-6 py-4">User</th>
              <th className="px-6 py-4">Role</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {users.map((user, i) => (
              <motion.tr 
                key={user.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                className="hover:bg-white/5 transition-colors"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center text-xs font-bold text-white">
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-white">{user.name}</div>
                      <div className="text-xs text-gray-500">{user.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Shield className="w-3 h-3 text-gray-400" />
                    <span className="text-sm text-gray-300">{user.role}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${user.status === 'Active' ? 'bg-green-500/10 text-green-400' : 'bg-gray-500/10 text-gray-400'}`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors">Edit</button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
