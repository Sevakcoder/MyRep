import beerType from "../components/files/beerType";

export default function (id: number, pagePath: Function) {

  if (id <= 60) {
    pagePath(`/shop/${beerType[0].type}/single_beer/id=${id}`)
  } else if (id >= 61 && id <= 120) {
    pagePath(`/shop/${beerType[1].type}/single_beer/id=${id}`)
  } else if (id >= 121 && id <= 180) {
    pagePath(`/shop/${beerType[2].type}/single_beer/id=${id}`)
  } else {
    pagePath(`/shop/${beerType[3].type}/single_beer/id=${id}`)
  }
}
