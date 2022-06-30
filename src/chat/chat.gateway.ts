import { Logger } from '@nestjs/common';
import { ConnectedSocket, MessageBody, OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway({namespace: 'chatroot'})
export class ChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

  private logger = new Logger('chat');

  constructor() {
    this.logger.log('constructor');
  }

   //lifecycle

  afterInit() {
    this.logger.log('init');
  }



  handleDisconnect(@ConnectedSocket() socket: Socket) {
    this.logger.log(`disconnected: ${socket.id} ${socket.nsp.name}`);
  }

  handleConnection(@ConnectedSocket() socket: Socket) {
      this.logger.log(`connected: ${socket.id} ${socket.nsp.name}`);
  }

  //lifecycle

  @SubscribeMessage('new_user')
  handleNewUser(
    @MessageBody() username: string,
    @ConnectedSocket() socket: Socket){
    console.log(socket.id);
    console.log(username);

    //username db save

    //broadcast (all connected socket)
    socket.broadcast.emit('user_connected', username);

    return username;
  }
}

// nest docs 
// lifecylce hooks (interface) use implements GatewayClass
// OnGatewayInit
// OnGatewayConnection
// OnGatewayDisconnect
