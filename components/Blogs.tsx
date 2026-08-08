import Link from "next/link";

export default function Blogs() {
  return (
    <section id="blogs">
      <div className="section-head reveal">
        <div>
          <div className="eyebrow">Our Writings</div>
          <h2 className="section-title">Thoughts beyond the mic.</h2>
        </div>
      </div>
      
      <div className="blog-grid reveal">
        <div className="blog-card">
          <div className="blog-img">Blog 01</div>
          <div className="blog-body">
            <div className="blog-meta">Aug 14, 2026 • 5 min read</div>
            <h4 className="blog-title">Why Unscripted Conversations Matter</h4>
            <p className="blog-excerpt">In a world full of rehearsed PR answers, genuine human connection relies on spontaneity.</p>
            <Link href="#" className="blog-read">Read Article →</Link>
          </div>
        </div>
        <div className="blog-card">
          <div className="blog-img" style={{ background: "linear-gradient(150deg,#a9c2b3,#2f4b3c)" }}>Blog 02</div>
          <div className="blog-body">
            <div className="blog-meta">Aug 02, 2026 • 8 min read</div>
            <h4 className="blog-title">The Art of Active Listening</h4>
            <p className="blog-excerpt">How taking a step back and truly listening can completely change the direction of an interview.</p>
            <Link href="#" className="blog-read">Read Article →</Link>
          </div>
        </div>
        <div className="blog-card">
          <div className="blog-img" style={{ background: "linear-gradient(150deg,#c9b6e0,#6a4f9e)" }}>Blog 03</div>
          <div className="blog-body">
            <div className="blog-meta">Jul 19, 2026 • 4 min read</div>
            <h4 className="blog-title">Setting Up a Home Studio</h4>
            <p className="blog-excerpt">Our essential gear list for creating broadcast-quality audio without breaking the bank.</p>
            <Link href="#" className="blog-read">Read Article →</Link>
          </div>
        </div>
      </div>

      <div className="apply-box reveal">
        <div>
          <h3>Write for Us</h3>
          <p>Got an interesting perspective on media, conversations, or culture? Submit your guest post and get featured.</p>
        </div>
        <div>
          <div className="form-field-light"><input type="text" placeholder="Your Name" /></div>
          <div className="form-field-light"><input type="text" placeholder="Proposed Blog Title" /></div>
          <div className="form-field-light"><textarea placeholder="Paste your article content or a Google Doc link here..."></textarea></div>
          <button className="form-submit-light">Submit Post</button>
        </div>
      </div>
    </section>
  );
}