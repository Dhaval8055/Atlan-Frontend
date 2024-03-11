//Trendings.jsx
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Trendings = ({ modelsData }) => {
  const sortedModels = modelsData
    .sort((a, b) => {
      // Sort by bookmarks first
      const bookmarksDiff = (b.bookmarked ? 1 : 0) - (a.bookmarked ? 1 : 0);
      if (bookmarksDiff !== 0) {
        return bookmarksDiff;
      }
      // If bookmarks are equal, sort alphabetically by name
      return a.name.localeCompare(b.name);
    })
    .slice(0, 8);

  return (
    <div style={{ padding: '20px', justifyContent: 'center' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', maxHeight: '50vh', maxWidth: '100vw' , marginTop: '-12vw', marginLeft: '1vw', marginRight: '1vw'}}>
        {sortedModels.map((model) => (
          <div key={model.id} style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '8px', backgroundColor: model.id < Date.now() ? 'inherit' : '#7eff7e', marginBottom: '20px' }}>
            <h3>{model.name}</h3>
            <p>{model.description}</p>
            <div>Bookmarks: {model.bookmarked ? 1 : 0}</div>
            <Link to={`/modeldetails/${model.id}`} style={{ textDecoration: 'none' }}>
              <button style={{ cursor: 'pointer', marginTop: '10px' }}>Explore Model</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

Trendings.propTypes = {
  modelsData: PropTypes.array.isRequired,
};

export default Trendings;