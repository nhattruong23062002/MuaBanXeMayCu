import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout">
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div className="content" style={{ padding: "20px", width: "100%" }}>
          {children}
        </div>
      </div>
    </div>
  );
};
export default AdminLayout;
