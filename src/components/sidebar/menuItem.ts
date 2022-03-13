export default class menuItem{
  link:string
  name:string
  tooltip:string
  icon:string

  constructor(link:string,name:string,tooltip:string,icon:string) {
    this.link = link
    this.name = name
    this.tooltip = tooltip
    this.icon = icon
  }

}
