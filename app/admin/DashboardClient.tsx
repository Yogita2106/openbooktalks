"use client";

import { useState } from "react";

export default function DashboardClient({ currentTab }: { currentTab: string }) {
  // --- Enhanced Dummy State ---
  const [team, setTeam] = useState([{ 
    id: 1, firstName: "Arjun", lastName: "Kapoor", role: "Host & Creator", 
    email: "arjun@openbook.com", phone: "+91 9876543210", district: "Jaipur", state: "Rajasthan", image: "" 
  }]);
  
  const [guests, setGuests] = useState([{ 
    id: 1, name: "Maya Reyes", ep: "Ep 47", topic: "Slow isn't the opposite of ambitious.", 
    email: "maya@reyes.com", social: "@mayareyes", image: "" 
  }]);

  const [blogs, setBlogs] = useState([{ id: 1, title: "Why Unscripted Conversations Matter", date: "Aug 14, 2026", excerpt: "In a world full of rehearsed PR answers..." }]);
  const [contacts, setContacts] = useState([{ id: 1, name: "Ravi", email: "ravi@test.com", msg: "Loved the last episode! When is the next one coming?" }]);
  const [joins, setJoins] = useState([{ id: 1, name: "Sneha", email: "sneha@test.com", role: "Video Editor", date: "Aug 08" }]);

  // --- Separate Form States for Complex Forms ---
  const [teamForm, setTeamForm] = useState({ firstName: "", lastName: "", role: "", email: "", phone: "", district: "", state: "", image: "" });
  const [guestForm, setGuestForm] = useState({ name: "", ep: "", topic: "", email: "", social: "", image: "" });
  const [blogForm, setBlogForm] = useState({ title: "", date: "", excerpt: "" });

  // --- Handlers ---
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, setForm: Function, formState: any) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setForm({ ...formState, image: imageUrl });
    }
  };

  const handleTeamAdd = (e: React.FormEvent) => {
    e.preventDefault();
    setTeam([{ id: Date.now(), ...teamForm }, ...team]);
    setTeamForm({ firstName: "", lastName: "", role: "", email: "", phone: "", district: "", state: "", image: "" });
  };

  const handleGuestAdd = (e: React.FormEvent) => {
    e.preventDefault();
    setGuests([{ id: Date.now(), ...guestForm }, ...guests]);
    setGuestForm({ name: "", ep: "", topic: "", email: "", social: "", image: "" });
  };

  const handleBlogAdd = (e: React.FormEvent) => {
    e.preventDefault();
    setBlogs([{ id: Date.now(), title: blogForm.title, date: blogForm.date, excerpt: blogForm.excerpt }, ...blogs]);
    setBlogForm({ title: "", date: "", excerpt: "" });
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

      {/* ---------------- 1. TEAM UI (Comprehensive Form & Cards) ---------------- */}
      {currentTab === "team" && (
        <>
          <div style={{ background: "#fff", padding: "32px", borderRadius: "16px", border: "1px solid #eaeaea", marginBottom: "32px", boxShadow: "0 4px 20px rgba(0,0,0,0.02)" }}>
            <h3 style={{ margin: "0 0 24px 0", fontSize: "18px", color: "#1c2f25", display: "flex", alignItems: "center", gap: "8px", borderBottom: "1px solid #f0f0f0", paddingBottom: "12px" }}>
              <span style={{ color: "#c1603c" }}>✦</span> Add New Crew Member
            </h3>
            <form onSubmit={handleTeamAdd} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
              <input type="text" placeholder="First Name" required value={teamForm.firstName} onChange={e => setTeamForm({...teamForm, firstName: e.target.value})} style={{ padding: "12px 16px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "14px", outline: "none" }} />
              <input type="text" placeholder="Last Name" required value={teamForm.lastName} onChange={e => setTeamForm({...teamForm, lastName: e.target.value})} style={{ padding: "12px 16px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "14px", outline: "none" }} />
              <input type="email" placeholder="Email Address" required value={teamForm.email} onChange={e => setTeamForm({...teamForm, email: e.target.value})} style={{ padding: "12px 16px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "14px", outline: "none" }} />
              <input type="tel" placeholder="Phone Number" required value={teamForm.phone} onChange={e => setTeamForm({...teamForm, phone: e.target.value})} style={{ padding: "12px 16px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "14px", outline: "none" }} />
              <input type="text" placeholder="District (e.g. Jaipur)" required value={teamForm.district} onChange={e => setTeamForm({...teamForm, district: e.target.value})} style={{ padding: "12px 16px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "14px", outline: "none" }} />
              <input type="text" placeholder="State (e.g. Rajasthan)" required value={teamForm.state} onChange={e => setTeamForm({...teamForm, state: e.target.value})} style={{ padding: "12px 16px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "14px", outline: "none" }} />
              <input type="text" placeholder="Role Applied (e.g. Video Editor)" required value={teamForm.role} onChange={e => setTeamForm({...teamForm, role: e.target.value})} style={{ padding: "12px 16px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "14px", outline: "none" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <span style={{ fontSize: "12px", color: "#666", fontWeight: "600" }}>Upload Profile Image</span>
                <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, setTeamForm, teamForm)} style={{ padding: "8px", borderRadius: "8px", border: "1px dashed #ccc", fontSize: "13px", cursor: "pointer", background: "#fafafa" }} />
              </div>
              <div style={{ gridColumn: "1 / -1", display: "flex", justifyContent: "flex-end", marginTop: "10px" }}>
                <button type="submit" style={{ padding: "12px 32px", background: "#1c2f25", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "600", transition: "background 0.2s" }}>Create Profile</button>
              </div>
            </form>
          </div>
          
          {/* Detailed Profile Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "24px" }}>
            {team.map(member => (
              <div key={member.id} style={{ background: "#fff", borderRadius: "16px", border: "1px solid #eaeaea", overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: "0 4px 15px rgba(0,0,0,0.03)" }}>
                <div style={{ background: "linear-gradient(135deg, #1c2f25, #2f4b3c)", height: "80px", position: "relative" }}>
                   <div style={{ position: "absolute", bottom: "-36px", left: "24px", width: "72px", height: "72px", borderRadius: "50%", background: "#fff", padding: "4px" }}>
                      {member.image ? (
                        <img src={member.image} alt={member.firstName} style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover" }} />
                      ) : (
                        <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "#f2ecdf", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "20px", color: "#1c2f25" }}>
                          {member.firstName.charAt(0)}{member.lastName.charAt(0)}
                        </div>
                      )}
                   </div>
                   <span style={{ position: "absolute", bottom: "12px", right: "16px", background: "#e7c98a", color: "#111", padding: "4px 12px", borderRadius: "20px", fontSize: "11px", fontWeight: "bold" }}>{member.role}</span>
                </div>
                
                <div style={{ padding: "44px 24px 24px 24px", flex: 1 }}>
                  <h4 style={{ margin: "0 0 16px 0", color: "#111", fontSize: "18px", fontWeight: "700" }}>{member.firstName} {member.lastName}</h4>
                  
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "13px", color: "#555" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c1603c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                      {member.email}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c1603c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                      {member.phone}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c1603c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      {member.district}, {member.state}
                    </div>
                  </div>
                </div>
                
                <div style={{ padding: "16px 24px", borderTop: "1px solid #f0f0f0", background: "#fafafa" }}>
                  <button onClick={() => deleteItem(member.id, "team")} style={{ width: "100%", background: "#fff", color: "#e03e3e", border: "1px solid #ffe5e5", padding: "8px", borderRadius: "6px", cursor: "pointer", fontSize: "13px", fontWeight: "600" }}>Remove Member</button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* ---------------- 2. GUESTS UI (Enhanced Details) ---------------- */}
      {currentTab === "guests" && (
        <>
          <div style={{ background: "#fff", padding: "32px", borderRadius: "16px", border: "1px solid #eaeaea", marginBottom: "32px", boxShadow: "0 4px 20px rgba(0,0,0,0.02)" }}>
            <h3 style={{ margin: "0 0 24px 0", fontSize: "18px", color: "#1c2f25", display: "flex", alignItems: "center", gap: "8px", borderBottom: "1px solid #f0f0f0", paddingBottom: "12px" }}>
              <span style={{ color: "#c1603c" }}>🎙️</span> Schedule New Guest
            </h3>
            <form onSubmit={handleGuestAdd} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
              <input type="text" placeholder="Guest Full Name" required value={guestForm.name} onChange={e => setGuestForm({...guestForm, name: e.target.value})} style={{ padding: "12px 16px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "14px", outline: "none" }} />
              <input type="email" placeholder="Guest Email" required value={guestForm.email} onChange={e => setGuestForm({...guestForm, email: e.target.value})} style={{ padding: "12px 16px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "14px", outline: "none" }} />
              <input type="text" placeholder="Episode No. (e.g. Ep 48)" required value={guestForm.ep} onChange={e => setGuestForm({...guestForm, ep: e.target.value})} style={{ padding: "12px 16px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "14px", outline: "none" }} />
              <input type="text" placeholder="Social Link (e.g. @username)" required value={guestForm.social} onChange={e => setGuestForm({...guestForm, social: e.target.value})} style={{ padding: "12px 16px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "14px", outline: "none" }} />
              <input type="text" placeholder="Main Topic / Quote" required value={guestForm.topic} onChange={e => setGuestForm({...guestForm, topic: e.target.value})} style={{ gridColumn: "1 / -1", padding: "12px 16px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "14px", outline: "none" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <span style={{ fontSize: "12px", color: "#666", fontWeight: "600" }}>Upload Guest Photo</span>
                <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, setGuestForm, guestForm)} style={{ padding: "8px", borderRadius: "8px", border: "1px dashed #ccc", fontSize: "13px", cursor: "pointer", background: "#fafafa" }} />
              </div>
              <div style={{ gridColumn: "1 / -1", display: "flex", justifyContent: "flex-end", marginTop: "10px" }}>
                <button type="submit" style={{ padding: "12px 32px", background: "#c1603c", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "600" }}>Add Guest</button>
              </div>
            </form>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "24px" }}>
            {guests.map(guest => (
              <div key={guest.id} style={{ background: "linear-gradient(145deg, #1c2f25, #22382c)", color: "#fff", borderRadius: "16px", padding: "24px", position: "relative", overflow: "hidden", display: "flex", gap: "20px", alignItems: "center" }}>
                {/* Guest Image Box */}
                <div style={{ width: "80px", height: "80px", borderRadius: "12px", background: "#2f4b3c", flexShrink: 0, overflow: "hidden" }}>
                  {guest.image ? (
                     <img src={guest.image} alt={guest.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  ) : (
                     <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", fontWeight: "bold", color: "#a9c2b3" }}>{guest.name.charAt(0)}</div>
                  )}
                </div>
                
                {/* Info Box */}
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "6px" }}>
                     <h3 style={{ margin: "0", fontSize: "20px", fontFamily: "'Fraunces', serif" }}>{guest.name}</h3>
                     <span style={{ background: "#e7c98a", color: "#111", fontSize: "11px", fontWeight: "bold", padding: "2px 8px", borderRadius: "4px" }}>{guest.ep}</span>
                  </div>
                  <p style={{ color: "#a9c2b3", fontSize: "13px", margin: "0 0 10px 0", fontStyle: "italic", lineHeight: "1.4" }}>"{guest.topic}"</p>
                  
                  <div style={{ display: "flex", gap: "12px", fontSize: "12px", color: "#eef2f0", opacity: 0.8, marginBottom: "12px" }}>
                    <span>✉ {guest.email}</span>
                    <span>🔗 {guest.social}</span>
                  </div>
                  
                  <button onClick={() => deleteItem(guest.id, "guests")} style={{ background: "rgba(224, 62, 62, 0.15)", color: "#ff8080", border: "1px solid rgba(224, 62, 62, 0.3)", padding: "4px 12px", borderRadius: "6px", cursor: "pointer", fontSize: "11px" }}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* ---------------- 3. BLOGS UI ---------------- */}
      {currentTab === "blogs" && (
        <>
          <div style={{ background: "#fff", padding: "24px", borderRadius: "16px", border: "1px solid #eaeaea", marginBottom: "32px" }}>
            <h3 style={{ margin: "0 0 16px 0", fontSize: "16px" }}>Publish New Article</h3>
            <form onSubmit={handleBlogAdd} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", gap: "12px" }}>
                <input type="text" placeholder="Article Title" required value={blogForm.title} onChange={e => setBlogForm({...blogForm, title: e.target.value})} style={{ flex: 2, padding: "10px 14px", borderRadius: "8px", border: "1px solid #ddd" }} />
                <input type="text" placeholder="Date" required value={blogForm.date} onChange={e => setBlogForm({...blogForm, date: e.target.value})} style={{ flex: 1, padding: "10px 14px", borderRadius: "8px", border: "1px solid #ddd" }} />
              </div>
              <textarea placeholder="Short Excerpt..." required value={blogForm.excerpt} onChange={e => setBlogForm({...blogForm, excerpt: e.target.value})} style={{ padding: "10px 14px", borderRadius: "8px", border: "1px solid #ddd", minHeight: "80px", resize: "vertical" }} />
              <button type="submit" style={{ padding: "10px 24px", background: "#2f4b3c", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", width: "fit-content" }}>Publish Blog</button>
            </form>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "24px" }}>
            {blogs.map(blog => (
              <div key={blog.id} style={{ background: "#fff", border: "1px solid #eaeaea", borderRadius: "16px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
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

      {/* ---------------- 4. CONTACT UI ---------------- */}
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
                <div style={{ background: "#f9f9f9", padding: "12px", borderRadius: "8px", color: "#444", fontSize: "14px" }}>{contact.msg}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ---------------- 5. JOIN UI ---------------- */}
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