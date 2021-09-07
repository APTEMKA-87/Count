import './Buttons.css'

// test
type ButtonType = {
    incButton: () => void
    resetButton: () => void
    incValue: number
    resetValue: number
    disable: boolean
}

export function Buttons(props: ButtonType) {
    return <div className='Buttons'>
        <button className='Button' onClick={props.incButton} disabled={props.disable}>inc</button>
        <button className='Button' onClick={props.resetButton} disabled={props.resetValue===0}>reset</button>
    </div>
}