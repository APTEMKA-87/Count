import './Display.css'

type DisplayType = {
    value: number
    disable: boolean
}


export function Display(props: DisplayType) {
    const style = props.disable ? 'Display error' : 'Display'
    return <div className={style} >
        {props.value}
    </div>
}
