import './style.css';

const canvas = document.querySelector<HTMLCanvasElement>('canvas')!;
const ctx = canvas.getContext('2d')!;
const controls = document.querySelector<HTMLElement>('[data-controls]')!;
const readout = document.querySelector<HTMLElement>('[data-readout]')!;
const help = document.querySelector<HTMLElement>('[data-help]')!;
let cells = new Uint8Array(720);
let generation = 0;
let timer: ReturnType<typeof setInterval> | undefined;
function button(label: string, action: () => void, attr?: string) {
  const b = document.createElement('button'); b.type = 'button'; b.textContent = label;
  if (attr) b.setAttribute(attr, '');
  b.addEventListener('click', action); controls.append(b); return b;
}
function stop() {
  clearInterval(timer); timer = undefined;
  const b = controls.querySelector('[data-play]');
  if (b) { b.textContent = 'run'; b.setAttribute('aria-pressed','false'); }
}
function draw() {
  ctx.fillStyle = '#d5ddbd'; ctx.fillRect(0,0,240,192);
  ctx.fillStyle = '#46573b';
    cells.forEach((alive,i) => { if(alive) ctx.fillRect(i%30*8+1,Math.floor(i/30)*8+1,6,6); });
    readout.innerHTML = `LIFE / <span data-generation>${String(generation).padStart(4,'0')}</span>`;
}
function step() {
  const next = new Uint8Array(720);
  cells.forEach((alive,i) => {
    const x=i%30,y=Math.floor(i/30); let n=0;
    for(let dy=-1;dy<=1;dy++) for(let dx=-1;dx<=1;dx++) if(dx||dy) n+=cells[((y+dy+24)%24)*30+(x+dx+30)%30];
    next[i]=Number(n===3 || (alive && n===2));
  }); cells=next; generation++; draw();
}
function load() {
  stop(); controls.replaceChildren();
    cells.fill(0); generation=0;
    [[14,10],[15,10],[13,11],[14,11],[14,12]].forEach(([x,y])=>cells[y*30+x]=1);
    button('step',()=>{stop();step();},'data-step');
    const play=button('run',()=>{if(timer)stop();else{timer=setInterval(step,180);play.textContent='pause';play.setAttribute('aria-pressed','true');}},'data-play'); play.setAttribute('aria-pressed','false');
    button('reset',load,'data-reset');help.textContent='Game of Life. Click the screen to plant cells.';draw();
}
canvas.addEventListener('click',event=>{
  const r=canvas.getBoundingClientRect(),x=(event.clientX-r.left)/r.width*240,y=(event.clientY-r.top)/r.height*192;
  cells[Math.min(23,Math.floor(y/8))*30+Math.min(29,Math.floor(x/8))]^=1;
  draw();
});
document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();});
load();

