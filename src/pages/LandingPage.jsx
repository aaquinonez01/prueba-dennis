import { useEffect, useState } from "react";
import fondoLanding from "../assets/logo.webp";
import { Link, useNavigate } from "react-router-dom";
import '../styles/landing.css'
export function LandingPage() {
  const [timeLeft, setTimeLeft] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    } else {
      navigate("/home");
    }
  }, [timeLeft, navigate]);

  return (
    <div className="landing-page">
      <div className="landing-page__content">
        <img
          src={fondoLanding}
          alt="Logo de la librería"
          className="landing-page__logo"
        />
        <h1 className="landing-page__title">Bienvenido a Relatos de Papel</h1>
        <p className="landing-page__subtitle">
          Tu destino para descubrir historias increíbles
        </p>
        <Link to="/" className="landing-page__button">
          Entrar ahora
        </Link>
        <p className="landing-page__redirect">
          Redirigiendo a la página principal en {timeLeft} segundos...
        </p>
      </div>
    </div>
  );
}
