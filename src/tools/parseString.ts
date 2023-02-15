import { EventRecord } from '../interfaces';

export const parseString = (input: string): EventRecord => {
  return {
    id: Date.now(),
    date: (new Date()).toISOString().slice(0, 10),
    content: input.replaceAll(/#\w+/g, '')?.replaceAll(/\*\d+/g, '')?.trim(),
    amount: Number(input.match(/\*\d+/)?.[0].slice(1)) || 0,
    tag: input.match(/#\w+/g)?.map(el => el.slice(1)) ?? [],
  };
};
