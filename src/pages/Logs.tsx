import { useEffect, useState } from "react";
import ModalView from "../components/ModalView";
import { getAllLogs,updateLog,deleteLog } from "../api/logsApi";
import { TableWithActions } from "../components/TableWithActions";
interface LogItem {
  id: number;
  method: string;
  endpoint: string;
  response: string;
  createdAt: string;
}

export const LogsPage = () => {
  const [logs, setLogs] = useState<LogItem[]>([]);
  const [loading, setLoading] = useState(true);

  
  const [logToDelete, setLogToDelete] = useState<LogItem | null>(null);
  const [logToEdit, setLogToEdit] = useState<LogItem | null>(null);


  useEffect(() => {
    fetchLogs();
  }, []);

  const fetchLogs = async () => {
    setLoading(true);
    try {
      const res = await getAllLogs();
      setLogs(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };


  const handleConfirmDelete = async () => {
    if (!logToDelete) return;

    try {
      await deleteLog(logToDelete.id);
      console.log(logToDelete.id);
      setLogs(logs.filter((l) => l.id !== logToDelete.id));
      setLogToDelete(null);
      alert('Deleted successfully !!');
    } catch (err) {
      console.error(err);
    }
  };

  
  const handleConfirmEdit = async (updatedLog: LogItem) => {
    try {
      await updateLog(updatedLog.id, updatedLog);
      setLogs(
        logs.map((log) => (log.id === updatedLog.id ? updatedLog : log))
      );
      setLogToDelete(null);
      alert('Updated successfully !!');
      setLogToEdit(null);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 fw-bold">📄 Registro de Logs</h2>

      {loading ? (
        <p>Cargando logs...</p>
      ) : (
        <TableWithActions
          items={logs}
          onDelete={setLogToDelete}
          onUpdate={setLogToEdit}
        />
      )}

      {logToDelete && (
        <ModalView
          show={!!logToDelete}
          onClose={() => setLogToDelete(null)}
          title="Confirmar eliminación"
          content={
            <div>
              <p>¿Seguro que quieres eliminar el log con ID {logToDelete.id}?</p>
              <button className="btn btn-danger me-2" onClick={handleConfirmDelete}>
                Sí, eliminar
              </button>
              <button className="btn btn-secondary" onClick={() => setLogToDelete(null)}>
                Cancelar
              </button>
            </div>
          }
        />
      )}

      
      {logToEdit && (
        <ModalView
          show={!!logToEdit}
          onClose={() => setLogToEdit(null)}
          title={`Editar log ID ${logToEdit.id}`}
          content={
            <div>
              <label className="form-label">Endpoint:</label>
              <input
                type="text"
                className="form-control mb-2"
                value={logToEdit.endpoint}
                onChange={(e) =>
                  setLogToEdit({ ...logToEdit, endpoint: e.target.value })
                }
              />

              <label className="form-label">Response:</label>
              <textarea
                className="form-control mb-2"
                value={logToEdit.response}
                onChange={(e) =>
                  setLogToEdit({ ...logToEdit, response: e.target.value })
                }
              />

              <button
                className="btn btn-warning me-2"
                onClick={() => handleConfirmEdit(logToEdit)}
              >
                Guardar cambios
              </button>

              <button className="btn btn-secondary" onClick={() => setLogToEdit(null)}>
                Cancelar
              </button>
            </div>
          }
        />
      )}
    </div>
  );
};
