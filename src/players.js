/* eslint-disable consistent-return */
export default function healthLevel(player) {
  if (player.health >= 50) {
    const health = 'healthy';
    return health;
  } if ((player.health >= 15) && (player.health < 50)) {
    const health = 'wounded';
    return health;
  } if (player.health < 15) {
    const health = 'critical';
    return health;
  }
}
