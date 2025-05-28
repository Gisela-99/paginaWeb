const ClueButton = ({ clue, show, onToggle }) => {
  return (
    <div style={{ marginTop: '1rem' }}>
      <button onClick={onToggle}>
        {show ? 'Ocultar pista' : 'Mostrar pista'}
      </button>
      {show && <p style={{ fontStyle: 'italic' }}>{clue}</p>}
    </div>
  );
};

export default ClueButton;