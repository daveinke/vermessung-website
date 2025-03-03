export default function Kontakt() {
  return (
    <main className='bg-gradient-to-t from-[#fbdec2] to-[#a6c1ee] h-screen'>
      <div className="w-[92%] mx-auto pt-10">
        <h1 className="text-4xl font-bold mb-6">Kontakt</h1>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Kontaktieren Sie uns</h2>
            <div>
              <h3 className="font-bold">Adresse:</h3>
              <p>Musterstraße 123</p>
              <p>12345 Musterstadt</p>
            </div>
            <div>
              <h3 className="font-bold">Telefon:</h3>
              <p>+49 123 456789</p>
            </div>
            <div>
              <h3 className="font-bold">E-Mail:</h3>
              <p>info@vermessung-beispiel.de</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 