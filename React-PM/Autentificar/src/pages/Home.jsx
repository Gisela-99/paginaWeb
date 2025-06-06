import React from "react";

export default function Home() {
  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <section style={{ ...styles.section, ...styles.hero }}>
        <h1 style={styles.title}>¡Bienvenido a Planeo!</h1>
        <p style={styles.subtitle}>
          Organiza tus tareas de forma sencilla, rápida y efectiva.
        </p>
        <button style={styles.button} onClick={() => alert("¡Vamos a empezar!")}>
          Empezar
        </button>
      </section>

      {/* About Section */}
      <section style={{ ...styles.section, ...styles.about }}>
        <h2 style={styles.sectionTitle}>Sobre Nosotros</h2>
        <p style={styles.sectionText}>
          Planeo es una plataforma diseñada para ayudarte a organizar y gestionar tus tareas de manera eficiente y sencilla.
        </p>
      </section>

      {/* Features Section */}
      <section style={{ ...styles.section, ...styles.features }}>
        <h2 style={styles.sectionTitle}>Características</h2>
        <ul style={styles.featuresList}>
          <li>✔️ Crear, editar y eliminar tareas</li>
          <li>✔️ Filtros rápidos para buscar</li>
          <li>✔️ Interfaz intuitiva y atractiva</li>
          <li>✔️ Sincronización en la nube</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section style={{ ...styles.section, ...styles.contact }}>
        <h2 style={styles.sectionTitle}>Contacto</h2>
        <p style={styles.sectionText}>¿Tienes dudas o sugerencias? Escríbenos:</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("¡Gracias por contactarnos!");
          }}
          style={styles.form}
        >
          <input type="email" placeholder="Tu correo" required style={styles.input} />
          <textarea placeholder="Tu mensaje" required style={{ ...styles.input, height: 80 }} />
          <button type="submit" style={styles.submitButton}>
            Enviar
          </button>
        </form>
      </section>

      {/* Footer fijo */}
      <footer style={styles.footer}>
        © 2025 Planeo. Todos los derechos reservados.
      </footer>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    margin: 0,
    padding: 0,
    position: "relative",
    minHeight: "100vh",
  },
  section: {
    height: "100vh",
    margin: "0 auto",
    padding: "40px 20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  hero: {
    background:
      "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
    color: "white",
    borderRadius: "0 0 50px 50px",
  },
  title: {
    fontSize: "3rem",
    marginBottom: 16,
    fontWeight: "bold",
    textShadow: "2px 2px 6px rgba(0,0,0,0.3)",
  },
  subtitle: {
    fontSize: "1.5rem",
    marginBottom: 32,
    maxWidth: 600,
  },
  button: {
    backgroundColor: "#ff6f61",
    border: "none",
    padding: "15px 40px",
    fontSize: "1.2rem",
    color: "white",
    borderRadius: 30,
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(255,111,97,0.6)",
    transition: "background-color 0.3s ease",
  },
  sectionTitle: {
    fontSize: "2.5rem",
    marginBottom: 24,
    color: "#2575fc",
  },
  sectionText: {
    fontSize: "1.15rem",
    lineHeight: 1.6,
    maxWidth: 600,
  },
  about: {
    backgroundColor: "#f5f7fa",
  },
  features: {
    backgroundColor: "#e9efff",
  },
  featuresList: {
    listStyle: "none",
    paddingLeft: 0,
    fontSize: "1.2rem",
    maxWidth: 400,
    lineHeight: 2,
    color: "#555",
  },
  contact: {
    backgroundColor: "#2575fc",
    color: "white",
  },
  form: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    maxWidth: 400,
    width: "100%",
    gap: 15,
  },
  input: {
    padding: 10,
    borderRadius: 8,
    border: "none",
    fontSize: "1rem",
  },
  submitButton: {
    backgroundColor: "#ff6f61",
    border: "none",
    padding: 12,
    fontSize: "1.2rem",
    borderRadius: 30,
    cursor: "pointer",
    color: "white",
    fontWeight: "bold",
    boxShadow: "0 4px 12px rgba(255,111,97,0.6)",
    transition: "background-color 0.3s ease",
  },
  footer: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#1b1f38",
    color: "white",
    textAlign: "center",
    padding: "12px 0",
    fontSize: "0.9rem",
    fontWeight: "600",
    boxShadow: "0 -3px 10px rgba(0,0,0,0.3)",
  },
};
