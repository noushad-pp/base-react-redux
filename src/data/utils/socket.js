import * as io from 'socket.io-client';
import { BASE_SOCKET_URL } from '../config/constants';

export const connectSocket = () => {
    const socket = io.connect(BASE_SOCKET_URL);
    return {
        on: function (eventName, callback) {
            socket.on(eventName, callback);
        },
        emit: function (eventName, data) {
            socket.emit(eventName, data);
        },
        socket_details: socket
    };
}
