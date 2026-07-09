const Footer = () => {
  return (
    <footer className="border-t border-foreground/20">
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-sm text-gray-500">
          DTNR Studio &copy; {new Date().getFullYear()} Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
