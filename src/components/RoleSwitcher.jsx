// src/components/RoleSwitcher.jsx
import { useStore } from "../store/useStore";

export default function RoleSwitcher() {
  const { role, setRole } = useStore();

  return (
    <select value={role} onChange={(e) => setRole(e.target.value)}>
      <option value="viewer">Viewer</option>
      <option value="admin">Admin</option>
    </select>
  );
}