import { useQuery } from '@tanstack/react-query';
import { getActor } from '../services/TMDB';

export const useActor = (idValue: string) => {
  return useQuery(['ActorPage/:id'], () => getActor(idValue), {
    enabled: !!idValue
  });
};
