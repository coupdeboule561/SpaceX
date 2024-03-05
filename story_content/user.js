function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5jxBHWvTtLx":
        Script1();
        break;
      case "5Xko1EHoqvU":
        Script2();
        break;
      case "6iqT0Q1ADhE":
        Script3();
        break;
      case "5dd4OIOXtHI":
        Script4();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  player.once(() => {
const target = object('5tki6CSYzmj');
const duration = 750;
const easing = 'ease-out';
const id = '5qWaY7WkLqX';
const pulseAmount = 0.07;
const delay = 9042;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  player.once(() => {
const target = object('6bpJ7DIUl0B');
const duration = 750;
const easing = 'ease-out';
const id = '5bjj6jTCZlY';
const pulseAmount = 0.07;
const delay = 10542;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  player.once(() => {
const target = object('67EFXbzNBeX');
const duration = 750;
const easing = 'ease-out';
const id = '6rCMNZuDUg2';
const pulseAmount = 0.07;
const delay = 10542;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script4 = function()
{
  player.once(() => {
const target = object('6EGk24tK4qs');
const duration = 750;
const easing = 'ease-out';
const id = '5aj5bBpk09Q';
const pulseAmount = 0.07;
const delay = 22000;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
