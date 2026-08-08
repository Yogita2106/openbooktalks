// app/admin/page.tsx
export default function AdminDashboard({ searchParams }: { searchParams: { tab?: string } }) {
  const currentTab = searchParams.tab || "team";

  return (
    <div>
      <h1 style={{ fontFamily: "'Fraunces', serif", color: "#1c2f25", fontSize: "36px", marginBottom: "24px", textTransform: "capitalize" }}>
        {currentTab.replace("-", " ")} Management
      </h1>
      
      <div style={{ background: "#fff", padding: "32px", borderRadius: "16px", border: "1px solid rgba(30,42,34,0.1)" }}>
        {currentTab === "team" && <p>Manage your Team members here. (Add/Edit/Delete functionality coming soon)</p>}
        {currentTab === "guests" && <p>Review guest applications and manage featured guests here.</p>}
        {currentTab === "blogs" && <p>Publish new blogs and review guest post submissions.</p>}
        {currentTab === "contact" && <p>View all messages received from the Contact section.</p>}
        {currentTab === "join" && <p>View applications from people who want to join the podcast crew.</p>}
      </div>
    </div>
  );
}