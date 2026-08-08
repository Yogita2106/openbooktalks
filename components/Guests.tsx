export default function Guests() {
  return (
    <section id="guests">
      <div className="section-head reveal">
        <div>
          <div className="eyebrow">Featured guests</div>
          <h2 className="section-title">Sat across the mic this season.</h2>
        </div>
      </div>
      
      <div className="guest-grid reveal">
        <div className="guest-card">
          <div className="guest-media" style={{ background: "linear-gradient(150deg,#e7c98a,#c1603c)" }}><div className="avatar" style={{ background: "#2f4b3c" }}>MR</div></div>
          <div className="guest-body"><div className="guest-ep">Episode 47</div><h4>Maya Reyes</h4><p className="guest-quote">&quot;Slow isn&apos;t the opposite of ambitious.&quot;</p></div>
        </div>
        <div className="guest-card">
          <div className="guest-media" style={{ background: "linear-gradient(150deg,#a9c2b3,#2f4b3c)" }}><div className="avatar" style={{ background: "#c1603c" }}>DC</div></div>
          <div className="guest-body"><div className="guest-ep">Episode 44</div><h4>Daniel Cho</h4><p className="guest-quote">&quot;I write the silence around scenes.&quot;</p></div>
        </div>
        <div className="guest-card">
          <div className="guest-media" style={{ background: "linear-gradient(150deg,#e7c98a,#b8863b)" }}><div className="avatar" style={{ background: "#2f4b3c" }}>IL</div></div>
          <div className="guest-body"><div className="guest-ep">Episode 41</div><h4>Isha Lamba</h4><p className="guest-quote">&quot;The best question is the unplanned one.&quot;</p></div>
        </div>
        <div className="guest-card">
          <div className="guest-media" style={{ background: "linear-gradient(150deg,#c9b6e0,#6a4f9e)" }}><div className="avatar" style={{ background: "#2f4b3c" }}>TO</div></div>
          <div className="guest-body"><div className="guest-ep">Episode 38</div><h4>Tomas Oduya</h4><p className="guest-quote">&quot;Buildings negotiate with light.&quot;</p></div>
        </div>
      </div>

      <div className="apply-box reveal">
        <div>
          <h3>Become a Guest</h3>
          <p>Have a unique story or expertise? We love unscripted, raw conversations. Tell us what you want to talk about.</p>
        </div>
        <div>
          <div className="form-field-light"><input type="text" placeholder="Your Name" /></div>
          <div className="form-field-light"><input type="email" placeholder="Email Address" /></div>
          <div className="form-field-light"><textarea placeholder="Describe yourself and the topics you'd like to discuss..."></textarea></div>
          <button className="form-submit-light">Apply as Guest</button>
        </div>
      </div>
    </section>
  );
}