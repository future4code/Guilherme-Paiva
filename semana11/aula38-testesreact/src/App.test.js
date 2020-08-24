import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import App from './App';

describe('Ao criar um post', () => {
  test('ele deve aparecer na tela, com o mesmo texto', () => {
    const {getByPlaceholderText} = render(<App />)

    const input = getByPlaceholderText('Novo post')

    fireEvent.change(input, {
      target: {
        value: 'teste'
      }
    })

    expect(input).toHaveValue('teste')
  })
})