// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from 'react'; 
    import ReactDOM from 'react-dom'; 
    import App from './App'; 
 
    it('renders without crashing', () => { 
      const div = document.createElement('div'); 
      ReactDOM.render(<App />, div); 
      ReactDOM.unmountComponentAtNode(div); 
    }); 

    describe('Addition', () => { 
      it('knows that 2 and 2 make 4', () => { 
        expect(2 + 2).toBe(4); 
      }); 
    }); 

    describe('Addition Error', () => { 
      it('knows that 2 and 2 make 4', () => { 
        expect(2 + 2).toBe(5); 
      }); 
    }); 


