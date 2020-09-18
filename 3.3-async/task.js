class AlarmClock {
    constructor(){
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (id === undefined){
            throw new Error('Параметр id не передан');
        } 

        try {
            if(this.alarmCollection.every(eachElement => eachElement.id !== id)){
                this.alarmCollection.push({
                    time,
                    callback,
                    id
                })
            } else {
                throw e;
            }   
        }catch(e) {
            console.error('Звонок с таким id уже существует');
        }  
    }

    removeClock(id){
        const x = this.alarmCollection.findIndex(eachElement => eachElement.id === id);
        this.alarmCollection.splice(x, 1);
    }
    
    getCurrentFormattedTime(){
        return new Date().toLocaleTimeString().slice(0,-3);
    }


    start(){

        function checkClock(eachElement){
            const F = this.alarmCollection.every(eachElement => eachElement.id === id);
            console.log(`таймер № ${id} время ${F.time}`);
            console.log(`текущее время ${this.getCurrentFormattedTime()}`);

            if (F.time === this.getCurrentFormattedTime){
                F.callback();
            
            }else{
                setInterval(checkClock, 1000);
            }  

            if(this.timerId === null){
                this.timerId = setInterval((this.alarmCollection.every(eachElement => checkClock(eachElement)), 1000));
            }
        }
    }

    stop(){
        if(this.timerId !== null){
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms(){
        this.alarmCollection.forEach(element => console.log(`будильник № ${element.id} заведен на ${element.time}`));
    }

    clearAlarms(){
        clearInterval(this.timerId);
        this.alarmCollection.splice(0, this.alarmCollection.length);
    }

}

// const XXX = new AlarmClock;
// XXX.addClock('11:00', ()=>console.log('time to wake up!'), 5)
// console.log('alarmCollection', XXX.alarmCollection);

// console.log(XXX.getCurrentFormattedTime());
// XXX.printAlarms();
// XXX.start(4);






 
