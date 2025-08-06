import{useState,useEffect} from "react"

const Carrusel1 = () => {
  const [imagenes, setImagenes] = useState([]);
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        const thumbs = data.products.slice(0, 10).map((prod) => prod.thumbnail);
        setImagenes(thumbs);
      });
  }, []);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndice((prev) => (prev + 1) % imagenes.length);
    }, 3000);

    return () => clearInterval(intervalo);
  }, [imagenes]);

  const siguiente = () => {
    setIndice((prev) => (prev + 1) % imagenes.length);
  };

  const anterior = () => {
    setIndice((prev) => (prev - 1 + imagenes.length) % imagenes.length);
  };

  if (imagenes.length === 0) return <p>Cargando imágenes...</p>;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        marginTop: "2rem",
      }}
    >
      <button
        onClick={anterior}
        style={{
          fontSize: "2rem",
          cursor: "pointer",
          backgroundColor: "transparent",
          border: "none",
        }}
      >
        ⟨
      </button>

      <img
        src={imagenes[indice]}
        alt={`Imagen ${indice}`}
        style={{
          height: "auto",
          borderRadius: "10px",
        }}
      />

      <button
        onClick={siguiente}
        style={{
          fontSize: "2rem",
          cursor: "pointer",
          backgroundColor: "transparent",
          border: "none",
        }}>
        ⟩
      </button>
    </div>
  );
};

export default Carrusel1;