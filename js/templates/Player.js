import CreateDOMElement from '../modules/CreateDOMElement';

const Player = CreateDOMElement`
  <div class="player">
    <audio></audio>
    <button class="player-control">Play</button>
    <div class="player-track">
      <span class="player-status"></span>
    </div>
  </div>
`;

export default Player;
