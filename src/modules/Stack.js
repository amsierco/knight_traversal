export const Stack = () => {
    let stack = [];
    let size = 0;

    const push = (data) => {
        stack.push(data);
        size++;
    }

    const pop = () => {
        if(size > 0){
            size--;
            return stack.pop();
        }
    }

    const peek = () => {
        return stack[size-1];
    }

    const isEmpty = () => {
        return (size <= 0);
    }

    return{
        push,
        pop,
        peek,
        isEmpty,
        get size(){return size;},
        get stack(){return stack;}
    }
}