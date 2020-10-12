export class Band{
  constructor(
  private id: string,
  private name: string,
  private genre: string,
  private responsible: string
  ){}

  getId(){
      return this.id;
  }

  getName(){
      return this.name
  }

  getGenre(){
      return this.genre;
  }

  getResponsible(){
      return this.responsible;
  }

  setId(id: string){
      this.id = id;
  }

  setName(name: string){
      this.name = name;
  }

  setGenre(genre: string){
      this.genre = genre;
  }

  setResponsible(responsible: string){
      this.responsible = responsible;
  }

  static toBandModel(band: any): Band {
      return new Band(band.id, band.name, band.genre, band.responsible);
  }
}

export interface BandInputDTO{
  name: string;
  genre: string;
  responsible: string;
}
