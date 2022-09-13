import Link from 'next/link';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';

const Navbar = () => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (query.length === 0) {
      alert('Please enter a search term');
      return;
    }

    router.push(`/results?query=${query}`);
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

            <button type="submit">Search</button>
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
