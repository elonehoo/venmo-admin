export class item{
  title: string
  link: string

  constructor(link:string,title:string) {
    this.title = title
    this.link = link
    
  }
}

export default class items{
  icon: string
  title: string
  link?: string
  unfold?:boolean
  chiled?: item[]

  constructor(link:string,title:string,icon:string,unfold:boolean,chiled?:item[]) {
    this.icon = icon
    this.title = title
    this.link = link
    this.unfold = unfold
    this.chiled = chiled
  }
}
