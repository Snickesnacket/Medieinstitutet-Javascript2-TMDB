

export interface IActorResponse {   
  biography: string, 
  birtday: string, 
  id: number, 
  known_for_department: string,
  name: string, 
  profile_path: string, 
  credits: {
    cast: ICast []
  }
}

export interface ICast {
  genre_ids: number[];
  id: number;
  title: string;
  overview: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
}