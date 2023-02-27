import React from 'react';
import Image from 'next/legacy/image'

const TodoCard = ({data}) => {
    const {title , id , image} = data
    return (
        <div>
            <h2>{id}:{title}</h2>
            <Image
                src={image}
                // width={800}
                // height={800}
                width='100%'
                height='100%'
                layout={'responsive'}
                objectFit={'cover'}
                alt={title}/>
        </div>
    );
};

export default TodoCard;