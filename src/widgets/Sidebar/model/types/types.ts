export interface ISidebarItem {
    text: string,
    path: string
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
    authOnly?: boolean
}
