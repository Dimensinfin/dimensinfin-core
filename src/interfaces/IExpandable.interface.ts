export interface IExpandable {
    isExpandable(): boolean
    isExpanded(): boolean
    collapse(): boolean
    expand(): boolean
    toggleExpanded():void
}
