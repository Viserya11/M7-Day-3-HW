import {Container , Alert} from 'react-bootstrap'  
import 'bootstrap/dist/css/bootstrap.min.css';  

const WarningSign = (prompt) => (
    
   <Container className='p-4'>  
   <Alert variant="danger" >{prompt.title}</Alert>  
</Container>  

  );  

export default WarningSign;  