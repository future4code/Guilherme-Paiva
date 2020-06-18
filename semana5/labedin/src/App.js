import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <div className="page-header">
        <h1>Labed</h1>
        <Header
          imagem="https://expertdigital.net/wp-content/uploads/2018/11/linkedin-logo.png"
        />  
      </div>
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://lastfm.freetls.fastly.net/i/u/ar0/d00c1e77dc1fd5efbc074e8398e8803d.png" 
          nome="Guilherme Paiva" 
          descricao="Estudante de Programação Web Full Stack na Labenu, também sou formado em Jornalismo. Trabalhei na IBM Brasil com suporte de vendas, como consultor na livraria Fnac e como vendedor de produtos duty free em um navio de cruzeiro, na Starboard."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

      <CardPequeno 
          imagem="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-email-512.png" 
          nome="Email:" 
          descricao="guilherme@paiva.com.br"
        />

      <CardPequeno 
          imagem="https://image.flaticon.com/icons/png/512/1239/1239525.png" 
          nome="Endereço:" 
          descricao="Rua dos Bobos, 0"
        />

      <CardPequeno 
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTY7WnyMKT2OQ_aCtng3Uj0It0GLh_uM-qhKIJDRzvDbC0Xfu7F&usqp=CAU" 
          nome="Idiomas:" 
          descricao="Português, Inglês"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/d66fd589f63fc62be134c54f0ad2ea8d" 
          nome="Starboard Cruise Services" 
          descricao="Atendente de vendas de produtos Duty Free." 
        />
        
        <CardGrande 
          imagem="https://docmanagement.com.br/wp-content/uploads/2012/07/ibm-logo.jpg" 
          nome="IBM Brasil" 
          descricao="Suporte de vendas de clientes nos EUA" 
        />

        <CardGrande 
          imagem="https://www.bcrcallcenter.com.br/wp-content/uploads/2017/09/logo-fnac.png" 
          nome="Fnac Brasil" 
          descricao="Consultor de vendas - Livros" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
