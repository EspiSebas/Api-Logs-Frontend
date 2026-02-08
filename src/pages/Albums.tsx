import { useState } from "react";
import { getAlbumByUser } from "../api/externalApi";

interface Album {
  id: number;
  title: string;
}

function Albums() {
  const [userId, setUserId] = useState<number | "">("");
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!userId) {
      setError("Debes ingresar un ID de usuario");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await getAlbumByUser(userId);
      setAlbums(res.data);

    } catch (err) {
      setError("Error al obtener los álbumes");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container" style={{ maxWidth: "900px" }}>
      <h2 className="mb-4 fw-bold">
        🎵 Buscar álbumes por usuario
      </h2>

      <div className="card shadow-sm p-4">

        <label className="form-label fw-semibold">
          ID de Usuario
        </label>

        <div className="input-group">
          <input
            type="number"
            className="form-control"
            placeholder="Ej: 1"
            value={userId}
            onChange={(e) => {
              const value = e.target.value;
              setUserId(value === "" ? "" : Number(value));
            }}
          />

          <button
            className="btn btn-primary"
            onClick={handleSearch}
            disabled={loading}
          >
            Buscar
          </button>
        </div>

        
        {loading && (
          <div className="mt-3 text-primary">
            Cargando álbumes...
          </div>
        )}

        {error && (
          <div className="mt-3 text-danger">
            {error}
          </div>
        )}

      </div>


      <div className="row mt-4">

        {albums.map((album) => (
          <div key={album.id} className="col-md-6 col-lg-4 mb-3">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h6 className="fw-semibold">
                  {album.title}
                </h6>
              </div>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Albums;
