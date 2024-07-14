export default function Footer() {
  return (
    <footer className="mt-40 md:mt-16 lg:mt-10 flex items-center justify-between h-16 border-t border-white/10 px-3 sm:px-9 text-xs text-white/25">
      <small className="text-xs">
        &copy; naveenSmacks. All rights reserved
      </small>
      {/* <ul className="flex gap-x-3 sm:gap-x-8"> */}
      <p>
        Version <strong>1.0</strong>
      </p>
    </footer>
  );
}
