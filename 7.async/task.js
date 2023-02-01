class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.intervalId = null;
    }
    addClock(time, callback) {
        this.time = 'HH:MM';
        this.callback = () => callback();
        if (!callback() && !time ) {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        if (this.alarmCollection.includes(time)) {
            console.warn('Уже присутствует звонок на это же время');
        }

        this.alarmCollection.push({callback, time, canCall: true});
    }

    removeClock(time) {
      return this.alarmCollection = this.alarmCollection.filter(el => el.time !== time);
    }

    getCurrentFormattedTime() {
        let date = new Date();
        return date.getHours().toString() + ':' + date.getMinutes().toString();
    }
    start() {
            if (this.intervalId === null) {
               setInterval(() => {
                    let arr = this.alarmCollection;
                    arr.forEach(el => {
                        if (el.time == this.getCurrentFormattedTime()) {
                            el.canCall = false;
                            return el.callback();
                        }
                    }
                    )
                    }, 1000)
            } 
            return;
        // if (this.intervalId !== null) {
        //     return;
        // }
        //   this.intervalId = setInterval(() => {
        //         let arr = this.alarmCollection;
        //         arr.forEach(el => checkout(el));
        //      }, 1000) 
        //      const checkout = (el) => {
        //         if (el.time == this.getCurrentFormattedTime()) {
        //             el.canCall = false;
        //             return el.callback();
        //         }
        //      }
    
    }
         
        
        stop() {
            clearInterval();
            this.intervalId = null;
        }

        resetAllCalls() {
            this.alarmCollection.forEach(el => el.canCall = true);
        }

        clearAlarms() {
            this.stop();
            this.alarmCollection = [];
        }
    }
