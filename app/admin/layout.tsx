import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  async function handleLogout() {
    "use server";
    // Yahan bhi await cookies() use kiya gaya hai
    const cookieStore = await cookies();
    cookieStore.delete("admin_token");
    redirect("/admin/login");
  }

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "'Inter', sans-serif" }}>
      {/* Sidebar */}
      <aside style={{ width: "250px", background: "#1c2f25", color: "#fff", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "24px", fontSize: "20px", fontWeight: "bold", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          OBT Admin
        </div>
        <nav style={{ flex: 1, padding: "24px 0", display: "flex", flexDirection: "column", gap: "8px" }}>
          <Link href="/admin?tab=team" style={{ padding: "12px 24px", color: "#e3e6df", textDecoration: "none" }}>Team</Link>
          <Link href="/admin?tab=guests" style={{ padding: "12px 24px", color: "#e3e6df", textDecoration: "none" }}>Guests</Link>
          <Link href="/admin?tab=blogs" style={{ padding: "12px 24px", color: "#e3e6df", textDecoration: "none" }}>Blogs</Link>
          <Link href="/admin?tab=contact" style={{ padding: "12px 24px", color: "#e3e6df", textDecoration: "none" }}>Contact Queries</Link>
          <Link href="/admin?tab=join" style={{ padding: "12px 24px", color: "#e3e6df", textDecoration: "none" }}>Join Queries</Link>
        </nav>
        <form action={handleLogout} style={{ padding: "24px" }}>
          <button type="submit" style={{ width: "100%", padding: "10px", background: "#c1603c", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer" }}>
            Logout
          </button>
        </form>
      </aside>

      {/* Main Content Area */}
      <main style={{ flex: 1, background: "#faf6ef", padding: "40px", overflowY: "auto" }}>
        {children}
      </main>
    </div>
  );
}