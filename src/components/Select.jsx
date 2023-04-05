import Form from 'react-bootstrap/Form';
import './Select.css'; 

function SelectBasicExample() {
  return (
    <Form.Select className='mt-4' aria-label="Default select example" style={{ width: '110px', height: '35px'  }}>
      <option>Genres</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
  );
}

export default SelectBasicExample;