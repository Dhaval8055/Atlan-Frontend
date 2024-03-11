import PropTypes from 'prop-types';
import { useState } from 'react';
import Modal from 'react-modal';
import { useNavigate } from "react-router-dom";

const Modellist = ({ modelsData, setModelsData, isUserLoggedIn }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [newModelName, setNewModelName] = useState('');
  const [newProviderName, setNewProviderName] = useState('');
  const [newModelDescription, setNewModelDescription] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleNewModelNameChange = (e) => {
    setNewModelName(e.target.value);
  };

  const handleNewProviderNameChange = (e) => {
    setNewProviderName(e.target.value);
  };

  const handleNewModelDescriptionChange = (e) => {
    setNewModelDescription(e.target.value);
  };

  const handleCreateModel = () => {
    if (!isUserLoggedIn) {
      alert("Please log in to create a new model.");
      return;
    }
    const newModel = {
      id: Date.now(),
      name: newModelName,
      description: newModelDescription,
      bookmarked: false,
    };

    setModelsData((prevModelsData) => [newModel, ...prevModelsData]);
    setNewModelName('');
    setNewModelDescription('');
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setNewModelName('');
    setNewProviderName('');
    setNewModelDescription('');
    setIsModalOpen(false);
    navigate('/modellist');
  };

  const handleBookmarkToggle = (id) => {
    if (!isUserLoggedIn) {
      navigate(`/login`);
      return;
    } else {
      setModelsData((prevModelsData) =>
        prevModelsData.map((model) =>
          model.id === id ? { ...model, bookmarked: !model.bookmarked } : model
        )
      );
    }
  };

  const handleModelClick = (id) => {
    navigate(`/modeldetails/${id}`);
  };

  const filteredModels = modelsData.filter((model) =>
    model.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '20px', justifyContent: 'center', width: '96vw', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div>
          <input
            type="text"
            placeholder="Search models"
            value={searchTerm}
            onChange={handleSearchChange}
            style={{ padding: '8px', marginRight: '10px', borderRadius: '8px' }}
          />
        </div>
        <div>
          <button
            style={{ padding: '8px', cursor: 'pointer' }}
            onClick={() => setIsModalOpen(true)}
          >
            Create New Model
          </button>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCancel}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          content: {
            width: '70%',
            maxWidth: '400px',
            margin: 'auto',
            height: '60%',
            borderRadius: '8px',
            overflow: 'auto',
          },
        }}
      >
        <div>
          <h2>Create New Model</h2>
          <div>
            <label>Model Name:</label>
            <input
              type="text"
              placeholder="Enter Model Name"
              value={newModelName}
              onChange={handleNewModelNameChange}
              style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
            />
          </div>
          <div>
            <label>Provider Name:</label>
            <input
              type="text"
              placeholder="Enter Provider Name"
              value={newProviderName}
              onChange={handleNewProviderNameChange}
              style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
            />
          </div>
          <div>
            <label>Model Description:</label>
            <textarea
              placeholder="Enter Model Description"
              value={newModelDescription}
              onChange={handleNewModelDescriptionChange}
              style={{ width: '100%', padding: '8px', marginBottom: '10px', resize: 'vertical' }}
            />
          </div>
          <button style={{ marginRight: '8px', padding: '8px', cursor: 'pointer' }} onClick={handleCreateModel}>
            Save Model
          </button>
          <button style={{ padding: '8px', cursor: 'pointer' }} onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </Modal>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '20px',
          maxHeight: '50vh',
        }}
      >
        {filteredModels.length === 0 ? (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center' }}>No models found</div>
        ) : (
          filteredModels.map((model) => (
            <div
              key={model.id}
              style={{
                border: '1px solid #ddd',
                padding: '10px',
                borderRadius: '8px',
                backgroundColor: model.id < Date.now() ? 'inherit' : '#7eff7e',
                marginBottom: '20px',
                cursor: 'pointer',
              }}
              onClick={() => handleModelClick(model.id)}
            >
              <h3>{model.name}</h3>
              <p>{model.description}</p>
              <button
                style={{ cursor: 'pointer', color: model.bookmarked ? 'red' : 'inherit' }}
                onClick={(e) => { e.stopPropagation(); handleBookmarkToggle(model.id); }}
              >
                Bookmark
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

Modellist.propTypes = {
  modelsData: PropTypes.array.isRequired,
  setModelsData: PropTypes.func.isRequired,
  isUserLoggedIn: PropTypes.bool.isRequired,
};

export default Modellist;