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
        x.length != this.alarmCollection.length ? console.log(`будильник № ${id} удален`) : console.log(`будильник № ${id} не удален`)
    }
    
    getCurrentFormattedTime(){
        return new Date().toLocaleTimeString().slice(0,-3);
    }


    start(){
        let checkClock = () => this.alarmCollection.forEach(eachElement => { 
            if(eachElement.time == this.getCurrentFormattedTime()) {
                eachElement.callback();
            }
        });

        if(this.timerId === null) {
            this.timerId = setInterval(checkClock, 1000);
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
        stop(this.timerId);
        this.alarmCollection.splice(0, this.alarmCollection.length);
    }
}





let testCase = () => {
    const newTimer = new AlarmClock;
    newTimer.addClock('19:12', ()=>console.log('time to wake up!'), 5);
    newTimer.addClock('19:13', ()=> console.log('move your ass'), 1); 
    newTimer.addClock('18:11', ()=>console.log('u r so late'), 2);

    // console.log('alarmCollection', newTimer.alarmCollection);
    // console.log(newTimer.getCurrentFormattedTime());
    newTimer.printAlarms();
    newTimer.removeClock(2);

    newTimer.addClock('19:44', ()=>console.log('u r so late'), 3);
    newTimer.start();
    newTimer.stop();
    newTimer.clearAlarms();
    newTimer.printAlarms();
}







 
