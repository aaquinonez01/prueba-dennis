export const Loading = () => {
  return (
    <div className="loading" aria-label="Cargando...">
      <div className="loading__content">
        <div className="loading__spinner"></div>
        <p className="loading__text">Cargando...</p>
      </div>
    </div>
  );
};
