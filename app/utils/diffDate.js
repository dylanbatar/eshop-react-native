export default class DiffDate {
  date;
  compare;
  calc = 86400000;

  constructor(dateNow, compare) {
    this.date = dateNow;
    this.compare = compare;
  }

  _convert() {
    const comp1 = new Date(this.date).getTime();
    const comp2 = new Date(this.compare).getTime();
    return comp1 - comp2;
  }

  // Get Diff on Days
  diffDays() {
    return Math.floor(this._convert() / this.calc);
  }

  // Get Diff on Hours
  diffHours() {
    return Math.floor((this._convert() % this.calc) / 3600000);
  }

  // Get Diff on Minuts
  diffMinutes() {
    return Math.round(((this._convert() % this.calc) % 3600000) / 60000);
  }
}
