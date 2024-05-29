import io from 'socket.io-client';

const socket = io('http://localhost:3000');

export const subscribeToChat = (cb) => {
    socket.on('chat message', msg => cb(null, msg));
};

export const sendMessage = (message) => {
    socket.emit('chat message', message);
};
