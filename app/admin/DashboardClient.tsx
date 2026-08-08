"use client";

import { useState } from "react";

export default function DashboardClient({ currentTab }: { currentTab: string }) {
  // --- Dummy State ---
  const [team, setTeam] = useState([{ id: 1, name: "Arjun Kapoor", role: "Host & Creator", initials: "AK" }]);
  const [guests, setGuests] = useState([{ id: 1, name: "Maya Reyes", ep: "Ep 47", topic: "Slow isn't the opposite of ambitious." }]);
  const [blogs, setBlogs] = useState([{ id: 1, title: "Why Unscripted Conversations Matter", date: "Aug 14, 2026", excerpt: "In a world full of rehearsed PR answers..." }]);
  const [contacts, setContacts] = useState([{ id: 1, name: "Ravi", email: "ravi@test.com", msg: "Loved the last episode! When is the next one coming?" }]);
  const [joins, setJoins] = useState([{ id: 1, name: "Sneha", email: "sneha@test.com", role: "Video Editor", date: "Aug 08" }]);

  const [formData, setFormData] = useState({ f1: "", f2: "", f3: "" });

  const handleAdd = (e: React.FormEvent, type: string) => {
    e.preventDefault();
    const newId = Date.now();
    if (type === "team") setTeam([{ id: newId, name: formData.f1, role: formData.f2, initials: formData.f1.substring(0,2).toUpperCase() }, ...team]);
    if (type === "guests") setGuests([{ id: newId, name: formData.f1, ep: formData.f2, topic: formData.f3 }, ...guests]);
    if (type === "blogs") setBlogs([{ id: newId, title: formData.f1, date: formData.f2, excerpt: formData.f3 }, ...blogs]);
    setFormData({ f1: "", f2: "", f3: "" });
  };

  const deleteItem = (id: number, type: string) => {
    if (type === "team") setTeam(team.filter(i => i.id !== id));
    if (type === "guests") setGuests(guests.filter(i => i.id !== id));
    if (type === "blogs") setBlogs(blogs.filter(i => i.id !== id));
    if (type === "contacts") setContacts(contacts.filter(i => i.id !== id));
    if (type === "joins") setJoins(joins.filter(i => i.id !== id));
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", paddingBottom: "40px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px", paddingBottom: "20px", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
        <h1 style={{ fontFamily: "'Fraunces', serif", color: "#1c2f25", fontSize: "32px", textTransform: "capitalize", margin: 0 }}>
          {currentTab.replace("-", " ")} Hub
        </h1>
      </div>

      {/* ---------------- 1. TEAM UI (Profile Rows) ---------------- */}
      {currentTab === "team" && (
        <>
          <div style={{ background: "#fff", padding: "24px", borderRadius: "16px", border: "1px solid #eaeaea", marginBottom: "32px" }}>
            <h3 style={{ margin: "0 0 16px 0", fontSize: "16px" }}>Add Crew Member</h3>
            <form onSubmit={(e) => handleAdd(e, "team")} style={{ display: "flex", gap: "12px" }}>
              <input type="text" placeholder="Name" required value={formData.f1} onChange={e => setFormData({...formData, f1: e.target.value})} style={{ flex: 1, padding: "10px 14px", borderRadius: "8px", border: "1px solid #ddd" }} />
              <input type="text" placeholder="Role (e.g. Producer)" required value={formData.f2} onChange={e => setFormData({...formData, f2: e.target.value})} style={{ flex: 1, padding: "10px 14px", borderRadius: "8px", border: "1px solid #ddd" }} />
              <button type="submit" style={{ padding: "10px 24px", background: "#1c2f25", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer" }}>Add</button>
            </form>
          </div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {team.map(member => (
              <div key={member.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#fff", padding: "16px 20px", borderRadius: "12px", border: "1px solid #f0f0f0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#2f4b3c", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "18px" }}>
                    {member.initials}
                  </div>
                  <div>
                    <h4 style={{ margin: "0 0 4px 0", color: "#111", fontSize: "16px" }}>{member.name}</h4>
                    <span style={{ color: "#666", fontSize: "13px" }}>{member.role}</span>
                  </div>
                </div>
                <button onClick={() => deleteItem(member.id, "team")} style={{ background: "transparent", color: "#e03e3e", border: "1px solid #ffe5e5", padding: "6px 12px", borderRadius: "6px", cursor: "pointer", fontSize: "12px" }}>Remove</button>
              </div>
            ))}
          </div>
        </>
      )}

      {/* ---------------- 2. GUESTS UI (Podcast Episode Cards) ---------------- */}
      {currentTab === "guests" && (
        <>
          <div style={{ background: "#fff", padding: "24px", borderRadius: "16px", border: "1px solid #eaeaea", marginBottom: "32px" }}>
            <h3 style={{ margin: "0 0 16px 0", fontSize: "16px" }}>Schedule Guest</h3>
            <form onSubmit={(e) => handleAdd(e, "guests")} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", gap: "12px" }}>
                <input type="text" placeholder="Guest Name" required value={formData.f1} onChange={e => setFormData({...formData, f1: e.target.value})} style={{ flex: 1, padding: "10px 14px", borderRadius: "8px", border: "1px solid #ddd" }} />
                <input type="text" placeholder="Episode No." required value={formData.f2} onChange={e => setFormData({...formData, f2: e.target.value})} style={{ width: "150px", padding: "10px 14px", borderRadius: "8px", border: "1px solid #ddd" }} />
              </div>
              <input type="text" placeholder="Main Topic / Quote" required value={formData.f3} onChange={e => setFormData({...formData, f3: e.target.value})} style={{ padding: "10px 14px", borderRadius: "8px", border: "1px solid #ddd" }} />
              <button type="submit" style={{ padding: "10px 24px", background: "#c1603c", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", width: "fit-content" }}>Add Guest</button>
            </form>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "24px" }}>
            {guests.map(guest => (
              <div key={guest.id} style={{ background: "linear-gradient(145deg, #1c2f25, #2f4b3c)", color: "#fff", borderRadius: "16px", padding: "24px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: "-20px", right: "-20px", width: "100px", height: "100px", background: "rgba(255,255,255,0.05)", borderRadius: "50%" }}></div>
                <span style={{ display: "inline-block", background: "#e7c98a", color: "#111", fontSize: "12px", fontWeight: "bold", padding: "4px 10px", borderRadius: "4px", marginBottom: "16px" }}>{guest.ep}</span>
                <h3 style={{ margin: "0 0 8px 0", fontSize: "22px", fontFamily: "'Fraunces', serif" }}>{guest.name}</h3>
                <p style={{ color: "#a9c2b3", fontSize: "14px", margin: "0 0 20px 0", fontStyle: "italic" }}>"{guest.topic}"</p>
                <button onClick={() => deleteItem(guest.id, "guests")} style={{ background: "rgba(255,255,255,0.1)", color: "#fff", border: "none", padding: "6px 12px", borderRadius: "6px", cursor: "pointer", fontSize: "12px", backdropFilter: "blur(4px)" }}>Remove Guest</button>
              </div>
            ))}
          </div>
        </>
      )}

      {/* ---------------- 3. BLOGS UI (Article Layout) ---------------- */}
      {currentTab === "blogs" && (
        <>
          <div style={{ background: "#fff", padding: "24px", borderRadius: "16px", border: "1px solid #eaeaea", marginBottom: "32px" }}>
            <h3 style={{ margin: "0 0 16px 0", fontSize: "16px" }}>Publish New Article</h3>
            <form onSubmit={(e) => handleAdd(e, "blogs")} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", gap: "12px" }}>
                <input type="text" placeholder="Article Title" required value={formData.f1} onChange={e => setFormData({...formData, f1: e.target.value})} style={{ flex: 2, padding: "10px 14px", borderRadius: "8px", border: "1px solid #ddd" }} />
                <input type="text" placeholder="Date" required value={formData.f2} onChange={e => setFormData({...formData, f2: e.target.value})} style={{ flex: 1, padding: "10px 14px", borderRadius: "8px", border: "1px solid #ddd" }} />
              </div>
              <textarea placeholder="Short Excerpt..." required value={formData.f3} onChange={e => setFormData({...formData, f3: e.target.value})} style={{ padding: "10px 14px", borderRadius: "8px", border: "1px solid #ddd", minHeight: "80px", resize: "vertical" }} />
              <button type="submit" style={{ padding: "10px 24px", background: "#2f4b3c", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", width: "fit-content" }}>Publish Blog</button>
            </form>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "24px" }}>
            {blogs.map(blog => (
              <div key={blog.id} style={{ background: "#fff", border: "1px solid #eaeaea", borderRadius: "16px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <div style={{ height: "120px", background: "#eef2f0", display: "flex", alignItems: "center", justifyContent: "center", color: "#a9c2b3" }}>
                   <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                </div>
                <div style={{ padding: "20px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <span style={{ color: "#888", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>{blog.date}</span>
                  <h4 style={{ margin: "0 0 10px 0", fontSize: "18px", color: "#111", lineHeight: "1.3" }}>{blog.title}</h4>
                  <p style={{ color: "#666", fontSize: "14px", margin: "0 0 20px 0", lineHeight: "1.5" }}>{blog.excerpt}</p>
                  <button onClick={() => deleteItem(blog.id, "blogs")} style={{ marginTop: "auto", background: "transparent", color: "#c1603c", border: "none", cursor: "pointer", fontSize: "13px", fontWeight: "bold", textAlign: "left", padding: 0 }}>Delete Post</button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* ---------------- 4. CONTACT UI (Message List) ---------------- */}
      {currentTab === "contact" && (
        <div style={{ background: "#fff", borderRadius: "16px", border: "1px solid #eaeaea", overflow: "hidden" }}>
          <div style={{ padding: "20px", background: "#faf6ef", borderBottom: "1px solid #eaeaea" }}>
             <h3 style={{ margin: 0, fontSize: "16px", color: "#1c2f25" }}>Inbox Messages</h3>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {contacts.map(contact => (
              <div key={contact.id} style={{ padding: "20px", borderBottom: "1px solid #f0f0f0", display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div>
                    <h4 style={{ margin: "0 0 2px 0", color: "#111", fontSize: "15px" }}>{contact.name}</h4>
                    <span style={{ color: "#0066cc", fontSize: "13px" }}>{contact.email}</span>
                  </div>
                  <button onClick={() => deleteItem(contact.id, "contacts")} style={{ background: "transparent", color: "#e03e3e", border: "none", cursor: "pointer", fontSize: "13px" }}>Resolve</button>
                </div>
                <div style={{ background: "#f9f9f9", padding: "12px", borderRadius: "8px", color: "#444", fontSize: "14px" }}>
                  {contact.msg}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ---------------- 5. JOIN UI (Data Table) ---------------- */}
      {currentTab === "join" && (
        <div style={{ background: "#fff", borderRadius: "16px", border: "1px solid #eaeaea", overflow: "hidden", boxShadow: "0 4px 10px rgba(0,0,0,0.02)" }}>
           <div style={{ padding: "20px", borderBottom: "1px solid #eaeaea" }}>
             <h3 style={{ margin: 0, fontSize: "16px", color: "#1c2f25" }}>Job Applications</h3>
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
            <thead>
              <tr style={{ background: "#f9f9f9", color: "#666", fontSize: "13px", textTransform: "uppercase" }}>
                <th style={{ padding: "16px 20px", fontWeight: "600" }}>Applicant Name</th>
                <th style={{ padding: "16px 20px", fontWeight: "600" }}>Email Address</th>
                <th style={{ padding: "16px 20px", fontWeight: "600" }}>Role Applied</th>
                <th style={{ padding: "16px 20px", fontWeight: "600" }}>Date</th>
                <th style={{ padding: "16px 20px", fontWeight: "600", textAlign: "right" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {joins.map(join => (
                <tr key={join.id} style={{ borderBottom: "1px solid #f0f0f0", fontSize: "14px" }}>
                  <td style={{ padding: "16px 20px", color: "#111", fontWeight: "500" }}>{join.name}</td>
                  <td style={{ padding: "16px 20px", color: "#666" }}>{join.email}</td>
                  <td style={{ padding: "16px 20px" }}><span style={{ background: "#eef2f0", color: "#2f4b3c", padding: "4px 10px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>{join.role}</span></td>
                  <td style={{ padding: "16px 20px", color: "#888" }}>{join.date}</td>
                  <td style={{ padding: "16px 20px", textAlign: "right" }}>
                     <button onClick={() => deleteItem(join.id, "joins")} style={{ background: "#ffe5e5", color: "#e03e3e", border: "none", padding: "6px 12px", borderRadius: "6px", cursor: "pointer", fontSize: "12px" }}>Reject</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

    </div>
  );
}