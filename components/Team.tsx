export default function Team() {
  return (
    <section id="team">
      <div className="section-head reveal">
        <div>
          <div className="eyebrow">Featured team</div>
          <h2 className="section-title">The people behind every recording.</h2>
        </div>
      </div>

      <div className="team-feature reveal">
        <div className="team-feature-media" style={{ background: "linear-gradient(150deg,#e7c98a,#c1603c)" }}>
          <div className="avatar-big" style={{ background: "linear-gradient(135deg,#2f4b3c,#1c2f25)" }}>AK</div>
        </div>
        <div className="team-feature-body">
          <div className="role">Host &amp; Creator</div>
          <h3>Arjun Kapoor</h3>
          <p>Started OpenbookTalks in a spare bedroom four years ago with a borrowed mic — now runs the whole show, top to bottom.</p>
        </div>
      </div>

      <div className="apply-box reveal">
        <div>
          <h3>Join the Crew</h3>
          <p>Passionate about podcasting? We are always looking for editors, producers, and creatives. Drop your details below.</p>
        </div>
        <div>
          <div className="form-field-light"><input type="text" placeholder="Your Name" /></div>
          <div className="form-field-light"><input type="email" placeholder="Email Address" /></div>
          <div className="form-field-light"><input type="text" placeholder="Role you are applying for (e.g. Editor)" /></div>
          <button className="form-submit-light">Submit Application</button>
        </div>
      </div>
    </section>
  );
}