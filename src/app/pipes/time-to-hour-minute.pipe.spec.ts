import { TimeToHourMinutePipe } from './time-to-hour-minute.pipe';

describe('TimeToHourMinutePipe', () => {
  it('create an instance', () => {
    const pipe = new TimeToHourMinutePipe();
    expect(pipe).toBeTruthy();
  });
});
