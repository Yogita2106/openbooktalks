import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function AdminLogin() {
  async function handleLogin(formData: FormData) {
    "use server";
    const id = formData.get("id");
    const password = formData.get("password");

    if (id === process.env.ADMIN_ID && password === process.env.ADMIN_PASS) {
      const cookieStore = await cookies();
      cookieStore.set("admin_token", "authenticated", { 
        httpOnly: true, 
        path: "/",
        maxAge: 60 * 60 * 24 
      });
      redirect("/admin");
    } else {
      redirect("/admin/login?error=Invalid credentials");
    }
  }

  return (
    <div style={{ display: "flex", height: "100vh", alignItems: "center", justifyContent: "center", background: "#f2ecdf" }}>
      <div style={{ background: "#fff", padding: "40px", borderRadius: "12px", width: "100%", maxWidth: "400px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
        <h2 style={{ fontFamily: "'Fraunces', serif", color: "#1c2f25", marginBottom: "24px", fontSize: "28px" }}>Admin Access</h2>
        <form action={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <input type="text" name="id" placeholder="Admin ID" required style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ccc" }} />
          <input type="password" name="password" placeholder="Password" required style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ccc" }} />
          <button type="submit" style={{ padding: "14px", background: "#2f4b3c", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "600" }}>Secure Login</button>
        </form>
      </div>
    </div>
  );
}