export enum SocketEvents {
  DISCONNECT = 'disconnect',
  JOIN_PARTY = 'join_party',
  SEND_MESSAGE = 'send_message',
  NEW_MESSAGE = 'new_message',
  GET_MESSAGES = 'get_messages',
  VIDEO_EVENT = 'video_event',
  USER_JOINED_PARTY = 'user_joined_party',
  USER_LEFT_PARTY = 'user_left_party',
  NEW_HOST = 'new_host',
  PARTY_USER_UPDATED = 'party_user_updated',
}

export enum VideoSocketEvents {
  VIDEO_PLAY = 'video_play',
  VIDEO_PAUSE = 'video_pause',
  VIDEO_SEEKED = 'video_seeked',
  VIDEO_PROGRESS = 'video_progress',
}
