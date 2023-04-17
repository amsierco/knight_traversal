export const Queue = () => {
    let queue = [];
    let length = 0;

    const enqueue = (data) => {
        queue.push(data);
        length++;
    }

    const dequeue = () => {
        if(length > 0){
            length--;
            let data = queue[0];
            queue.shift();
            return data;
        }
    }

    const peek = () => {
        return queue[0];
    }

    const isEmpty = () => {
        return (length <= 0);
    }

    return{
        enqueue,
        dequeue,
        peek,
        isEmpty,
        get length(){return length;},
        get queue(){return queue;}
    }
}