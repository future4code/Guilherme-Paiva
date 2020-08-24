import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import Post from './Post';

describe('Ao clicar no botão Curtir', () => {
    test('ele troca seu texto para Descurtir', () => {
      const {getByText} = render(<Post />)
  
      const button = getByText(/Curtir/)
  
      fireEvent.change(button, {
        target: {
          value: 'Descurtir'
        }
      })
  
      expect(button).toHaveText(/Descurtir/)
    })
  })