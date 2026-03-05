export default function SignSuccess() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow text-center">
      <div className="text-6xl mb-4">✅</div>
      <h1 className="text-3xl font-bold mb-2">Firma Registrada</h1>
      <p className="text-gray-600 mb-6">
        Tu PDF firmado ha sido subido exitosamente. El administrador recibirá notificación de tu firma.
      </p>
      <p className="text-sm text-gray-500">
        Puedes cerrar esta ventana.
      </p>
    </div>
  );
}
