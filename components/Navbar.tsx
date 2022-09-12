import Link from 'next/link';
import { FormEvent, useState } from 'react';

const Navbar = () => {
  const [query, setQuery] = useState('');

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    alert(JSON.stringify({ query }));
  };

  return (
    <nav className="navbar">
      <div className="navbar-items">
        <Link href="/">
          <a className="navbar-header">MusicList</a>
        </Link>

        <div className="navbar-search">
          <form onSubmit={onSubmit}>
            <div>
              <input
                type="text"
                name="query"
                id="query"
                placeholder="Search"
                autoComplete="off"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </form>
        </div>

        <div className="navbar-links">
          <Link href="/">
            <a className="navbar-link">Home</a>
          </Link>
          <Link href="/login">
            <a className="navbar-link">Log In</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
