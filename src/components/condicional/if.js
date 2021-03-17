
export default props => {
    const elseChild = props.children.filter(child => {
        return child.type && child.type.name === 'Else'
    })[0]
    if(props.test) {
        return props.children
    } else {
        return elseChild
    }
}

export const Else = props => props.children