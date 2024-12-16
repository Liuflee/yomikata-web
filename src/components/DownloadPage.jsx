import React from 'react';
import { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';

const DownloadPage = () => {
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    setIsMobileDevice(isMobile); // Solo se ejecuta en el cliente
  }, []);

  console.log('isMobile', isMobileDevice);
  const qrCodeUrl = 'https://drive.google.com/uc?export=download&id=15UCGNhCox3N2g68aBSZCqNeetxGzkK5d';

  return (
    <div>
      <style jsx>{`
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background: #f5f5f5;
          color: #333;
        }
        header {
          background: #a64e6b;
          padding: 20px;
          color: white;
          text-align: center;
        }
        .container {
          padding: 20px;
          max-width: 800px;
          margin: auto;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .qr-code img {
          max-width: 200px;
          margin: 20px auto;
          display: block;
        }
        .btn-download {
          background: #a64e6b;
          color: white;
          padding: 10px 20px;
          text-decoration: none;
          border-radius: 5px;
          font-weight: bold;
          display: inline-block;
        }
      `}</style>
      <header>
        <h1>Yomikata</h1>
        <p>La app que organiza tus libros y captura citas de imágenes.</p>
      </header>
      <main className="container">
        <section>
          <h2>¿Qué es Yomikata?</h2>
          <p>
            Yomikata es la aplicación perfecta para los amantes de los libros. Guarda tus lecturas,
            organiza listas, y extrae citas de libros físicos utilizando nuestra avanzada tecnología OCR.
          </p>
        </section>
        <section>
          <h2>Descarga Yomikata</h2>
          {!isMobileDevice  ? (
            <div className="qr-code">
              <p>Escanea este código QR para descargar la app:</p>
              <img src="/images/qr-code.png" alt="QR Code de Yomikata" />
            </div>
          ) : (
            <a href={qrCodeUrl} className="btn-download">
              Descargar ahora
            </a>
          )}
        </section>
      </main>
    </div>
  );
};

export default DownloadPage;