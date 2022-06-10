const speed = 0.011;
export default class Paddle {
  constructor(paddleElem) {
    this.paddleElem = paddleElem;
    this.reset();
  }
  get position() {
    return parseFloat(
      getComputedStyle(this.paddleElem).getPropertyValue("--position")
    );
  }
  set position(value) {
    this.paddleElem.style.setProperty("--position", value);
  }
  rect() {
    return this.paddleElem.getBoundingClientRect();
  }
  reset() {
    this.position = 50;
  }
  Update(delta, ballHeight) {
    this.position += speed * delta * (ballHeight - this.position);
  }
}
