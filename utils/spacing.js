
export const Spacer = ({factor=1}) => {
    return (
        <span style={{
            margin: `${factor * 8}px`,
        }}>
        </span>
    )
}

export const VerticalSpacer = ({factor=1}) => {
    return (
        <div style={{
            height: `${factor * 8}px`,
        }}>
        </div>
    )
}

export const getPixelAmount = (factor) => {
    return 8 * factor + 'px'
}