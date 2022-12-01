import { ItemType } from "../OBJECTS/interfaces";

export default async function(url:string) {
  let object = await fetch(url);
  let text = await object.text();
  let listItems: ItemType[] = await JSON.parse(text);
return listItems
}

