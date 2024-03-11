//Modeldetails.jsx
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useState} from 'react';
import '../Modeldetails.css';
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet';

const Modeldetails = ({ modelsData }) => {
  const { id } = useParams();
  console.log('id:', id);

  const selectedModel = modelsData.find((model) => model.id.toString() === id);
  console.log('selectedModel:', selectedModel);

  const [output, setOutput] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [textValue, setTextValue] = useState('');
  const [setType] = useState(true);

    const handleChange = (e) => {
    setTextValue(e.target.value);
  };
  const handleReset = () => {
    setTextValue('');
    setOutput('');
    setType(true);
  };
  const handleTryModelClick = () => {
    setIsVisible(false);
  };
  
  const tryModel = async () => {
    if (textValue === '') {
      alert('Please enter the input data');
    }
    setShowModal(true);
    try {
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          const result = "Sample output from the model execution";
          resolve(result);
        }, 2500); 
      });
        setOutput(response);
  
    } catch (error) {
        console.error('Error occurred during model execution:', error);
    } finally {
      setShowModal(false);
      setIsVisible(true);
    }
  };

  return (
    <>
       <Helmet>
        <title>{selectedModel ? selectedModel.name : 'Model Details'}</title>
        <meta name="description" content="Model Page " />
      </Helmet>
      <div className="card model-container">
        {showModal}
        <div className="card-content">
          <div className="details-section">
            <div className="model-section card">
              <div className="card-body">
                <h2 className="model-title-detail">
                  {selectedModel ? selectedModel.name : 'Model Not Found'}
                </h2>
              </div>
            </div>
            <div className="model-section card">
              <div className="card-body">
                <p>
                  <strong>Description:</strong> {selectedModel ? selectedModel.description : ''}
                </p>
              </div>
            </div>
          </div>
     <div className="execution-section">
             <div className="model-section card">
             <div className="card-body">
                <div>
                   <div style={{ display: `${isVisible ? 'block' : 'none'}` }}>
                     <button onClick={handleTryModelClick} className="try-model-btn">
                       Try Model
                     </button>
                   </div>
                   <div style={{ display: `${isVisible ? 'none' : 'block'}`, width: '100%' }}>
                     <div className="text-area-detail">
                       <textarea
                        value={textValue}
                        rows="3"
                        onChange={handleChange}
                        placeholder="Enter Text"
                      ></textarea>

                      <div className="submit-button" style={{ textAlign: 'left' }}>
                        <Button variant="primary" type="submit" onClick={tryModel}>
                          Submit
                        </Button>
                        <Button variant="primary" onClick={handleReset} type="reset">
                          Reset
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="model-output card">
          <div className="card-body">
            <h4>Output:</h4>
            <p>{output}</p>
          </div>
        </div>
      </div>
    </>
  );
};

Modeldetails.propTypes = {
  modelsData: PropTypes.array.isRequired,
};

export default Modeldetails;