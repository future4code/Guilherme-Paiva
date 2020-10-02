export class Concert {
  constructor(
    private id: string,
    private week_day: WeekDay,
    private start_time: number,
    private end_time: number,
    private band_id: string
  ){}

  getId(){
    return this.id;
  }

  getWeekDay(){
      return this.week_day
  }

  getStartTime(){
      return this.start_time;
  }

  getEndTime(){
      return this.end_time;
  }

  getBandId(){
    return this.band_id;
}

  setId(id: string){
      this.id = id;
  }

  setWeekDay(week_day: WeekDay){
      this.week_day = week_day;
  }

  setStartTime(start_time: number){
      this.start_time = start_time;
  }

  setEndTime(end_time: number){
      this.end_time = end_time;
  }

  setBandId(band_id: string){
    this.band_id = band_id;
  }

  static toConcertModel(concert: any): Concert {
    return new Concert(concert.id, concert.week_day, concert.start_time, concert.end_time, concert.band_id);
  }
}

export interface ConcertInputDTO{
  week_day: WeekDay,
  start_time: number,
  end_time: number,
  band_id: string
}

export enum WeekDay {
  SEXTA = "SEXTA",
  SÁBADO = "SÁBADO",
  DOMINGO = "DOMINGO"
}