function About() {
  const team = [
    { name: "Alice Mwangi", role: "CEO & Founder" },
    { name: "Brian Otieno", role: "Lead Developer" },
    { name: "Carol Njeri", role: "UI/UX Designer" },
  ];

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "40px 20px" }}>
      <h1>About Us</h1>
      <p style={{ color: "#555", lineHeight: "1.7" }}>
        We are a passionate team building modern solutions for everyday problems.
        Founded in 2024, our mission is to create products that are simple, fast, and reliable.
        We believe technology should work for people — not the other way around.
      </p>

      <p style={{ color: "#555", lineHeight: "1.7" }}>
        From startups to enterprises, we've helped dozens of clients transform their ideas
        into real, scalable products. Our team brings together expertise in design,
        engineering, and strategy to deliver results that matter.
      </p>

      {/* Stats */}
      <div style={{ display: "flex", gap: "20px", marginTop: "40px", flexWrap: "wrap" }}>
        {[
          { label: "Founded", value: "2024" },
          { label: "Team Size", value: "12+" },
          { label: "Projects", value: "30+" },
          { label: "Clients", value: "50+" },
        ].map((stat, i) => (
          <div key={i} style={{
            flex: "1",
            minWidth: "120px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "20px",
            textAlign: "center"
          }}>
            <h2 style={{ margin: 0 }}>{stat.value}</h2>
            <p style={{ color: "#666", margin: "6px 0" }}>{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Mission */}
      <div style={{ marginTop: "50px" }}>
        <h2>Our Mission</h2>
        <p style={{ color: "#555", lineHeight: "1.7" }}>
          To empower businesses and individuals with tools that are intuitive, accessible,
          and built to last. We're committed to quality, transparency, and putting our
          users first in every decision we make.
        </p>
      </div>

      {/* Team */}
      <div style={{ marginTop: "50px" }}>
        <h2>Meet the Team</h2>
        <div style={{ display: "flex", gap: "20px", marginTop: "20px", flexWrap: "wrap" }}>
          {team.map((member, i) => (
            <div key={i} style={{
              flex: "1",
              minWidth: "180px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "24px",
              textAlign: "center"
            }}>
              <div style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: "#000",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                margin: "0 auto 12px"
              }}>
                {member.name.charAt(0)}
              </div>
              <h3 style={{ margin: 0 }}>{member.name}</h3>
              <p style={{ color: "#666", margin: "6px 0" }}>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;