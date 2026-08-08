"use client";

import { useState } from "react";

export default function DashboardClient({ currentTab }: { currentTab: string }) {
  // --- Dummy State for Data ---
  const [team, setTeam] = useState([{ id: 1, name: "Arjun Kapoor", role: "Host & Creator" }]);
  const [guests, setGuests] = useState([{ id: 1, name: "Maya Reyes", ep: "Episode 47" }]);
  const [blogs, setBlogs] = useState([{ id: 1, title: "Why Unscripted Conversations Matter", date: "Aug 14, 2026" }]);
  const [contacts, setContacts] = useState([{ id: 1, name: "Ravi", email: "ravi@test.com", msg: "Loved the last episode!" }]);
  const [joins, setJoins] = useState([{ id: 1, name: "Sneha", email: "sneha@test.com", role: "Video Editor" }]);

  // --- Form States ---
  const [formData, setFormData] = useState({ f1: "", f2: "", f3: "" });

  const handleAdd = (e: React.FormEvent, type: string) => {
    e.preventDefault();
    const newId = Date.now();
    if (type === "team") setTeam([...team, { id: newId, name: formData.f1, role: formData.f2 }]);
    if (type === "guests") setGuests([...guests, { id: newId, name: formData.f1, ep: formData.f2 }]);
    if (type === "blogs") setBlogs([...blogs, { id: newId, title: formData.f1, date: formData.f2 }]);
    setFormData({ f1: "", f2: "", f3: "" }); // Reset form
  };

  const deleteItem = (id: number, type: string) => {
    if (type === "team") setTeam(team.filter(i => i.id !== id));
    if (type === "guests") setGuests(guests.filter(i => i.id !== id));
    if (type === "blogs") setBlogs(blogs.filter(i => i.id !== id));
    if (type === "contacts") setContacts(contacts.filter(i => i.id !== id));
    if (type === "joins") setJoins(joins.filter(i => i.id !== id));
  };

  // UI Reusable Blocks
  const renderList = (data: any[], type: string, col1: string, col2: string) => (
    <div style={{ marginTop: "24px" }}>
      {data.length === 0 ? <p>No records found.</p> : data.map((item) => (
        <div key={item.id} style={{ display: "flex", justifyContent: "space-between", padding: "12px", borderBottom: "1px solid #eee", alignItems: "center" }}>
          <div>
            <strong>{item[col1]}</strong> <span style={{ color: "#666", fontSize: "14px", marginLeft: "10px" }}>{item[col2]}</span>
          </div>
          <button onClick={() => deleteItem(item.id, type)} style={{ background: "#c1603c", color: "white", border: "none", padding: "6px 12px", borderRadius: "4px", cursor: "pointer" }}>Delete</button>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <h1 style={{ fontFamily: "'Fraunces', serif", color: "#1c2f25", fontSize: "36px", marginBottom: "24px", textTransform: "capitalize" }}>
        {currentTab.replace("-", " ")} Management
      </h1>
      
      <div style={{ background: "#fff", padding: "32px", borderRadius: "16px", border: "1px solid rgba(30,42,34,0.1)", minHeight: "400px" }}>
        
        {/* TEAM TAB */}
        {currentTab === "team" && (
          <>
            <h3>Add New Team Member</h3>
            <form onSubmit={(e) => handleAdd(e, "team")} style={{ display: "flex", gap: "10px", marginTop: "12px" }}>
              <input type="text" placeholder="Name" required value={formData.f1} onChange={e => setFormData({...formData, f1: e.target.value})} style={{ padding: "8px", flex: 1 }} />
              <input type="text" placeholder="Role" required value={formData.f2} onChange={e => setFormData({...formData, f2: e.target.value})} style={{ padding: "8px", flex: 1 }} />
              <button type="submit" style={{ padding: "8px 16px", background: "#2f4b3c", color: "#fff", border: "none", cursor: "pointer" }}>Add</button>
            </form>
            {renderList(team, "team", "name", "role")}
          </>
        )}

        {/* GUESTS TAB */}
        {currentTab === "guests" && (
          <>
            <h3>Add New Guest</h3>
            <form onSubmit={(e) => handleAdd(e, "guests")} style={{ display: "flex", gap: "10px", marginTop: "12px" }}>
              <input type="text" placeholder="Guest Name" required value={formData.f1} onChange={e => setFormData({...formData, f1: e.target.value})} style={{ padding: "8px", flex: 1 }} />
              <input type="text" placeholder="Episode (e.g. Ep 48)" required value={formData.f2} onChange={e => setFormData({...formData, f2: e.target.value})} style={{ padding: "8px", flex: 1 }} />
              <button type="submit" style={{ padding: "8px 16px", background: "#2f4b3c", color: "#fff", border: "none", cursor: "pointer" }}>Add</button>
            </form>
            {renderList(guests, "guests", "name", "ep")}
          </>
        )}

        {/* BLOGS TAB */}
        {currentTab === "blogs" && (
          <>
            <h3>Add New Blog</h3>
            <form onSubmit={(e) => handleAdd(e, "blogs")} style={{ display: "flex", gap: "10px", marginTop: "12px" }}>
              <input type="text" placeholder="Blog Title" required value={formData.f1} onChange={e => setFormData({...formData, f1: e.target.value})} style={{ padding: "8px", flex: 1 }} />
              <input type="text" placeholder="Date (e.g. Aug 20, 2026)" required value={formData.f2} onChange={e => setFormData({...formData, f2: e.target.value})} style={{ padding: "8px", flex: 1 }} />
              <button type="submit" style={{ padding: "8px 16px", background: "#2f4b3c", color: "#fff", border: "none", cursor: "pointer" }}>Add</button>
            </form>
            {renderList(blogs, "blogs", "title", "date")}
          </>
        )}

        {/* CONTACT QUERIES TAB */}
        {currentTab === "contact" && (
          <>
            <h3>Contact Messages</h3>
            <p style={{ color: "#666", fontSize: "14px" }}>Review and resolve messages from users.</p>
            {renderList(contacts, "contacts", "name", "msg")}
          </>
        )}

        {/* JOIN QUERIES TAB */}
        {currentTab === "join" && (
          <>
            <h3>Job Applications</h3>
            <p style={{ color: "#666", fontSize: "14px" }}>Review and manage role applications.</p>
            {renderList(joins, "joins", "name", "role")}
          </>
        )}

      </div>
    </div>
  );
}