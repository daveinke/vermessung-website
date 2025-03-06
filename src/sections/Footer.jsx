import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-[1400px] mx-auto py-12 px-8">
        <div className="grid grid-cols-3 gap-8">
          {/* Kontakt Informationen */}
          <div>
            <h4 className="text-xl font-bold mb-4">Kontakt</h4>
            <p className="space-y-2">
              Käthe-Kollwitz-Ring 45<br />
              76676 Graben-Neudorf<br />
              <span className="block mt-2">Tel: 07255/7681450</span>
              <span className="block">Mobil: 015771458875</span>
              <span className="block">Email: kontakt@vermessung-starzec.de</span>
            </p>
          </div>

          {/* Leistungen Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Leistungen</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/leistungen/amtliche-vermessung" className="hover:text-gray-300 transition-colors">
                  Amtliche Vermessung
                </Link>
              </li>
              <li>
                <Link to="/leistungen/bauvermessung" className="hover:text-gray-300 transition-colors">
                  Bauvermessung
                </Link>
              </li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h4 className="text-xl font-bold mb-4">Rechtliches</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/impressum" className="hover:text-gray-300 transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="hover:text-gray-300 transition-colors">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 Vermessungsbüro Starzec. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
