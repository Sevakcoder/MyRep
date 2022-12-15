import { IBeerItemValue } from '../data-structures/interfaces';

export default async function(url:string) {
  let object = await fetch(url);
  let text = await object.text();
  let listItems: IBeerItemValue[] = await JSON.parse(text);
return listItems
}

