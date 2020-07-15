class TodayDateComponent extends HTMLElement{
    constructor(){
    super();
    setInterval(() =>{
    console.log('alive');
    this.innerText= new Date();}, 1000);
    }
}

const comp = customElements.define('today-date', TodayDateComponent);