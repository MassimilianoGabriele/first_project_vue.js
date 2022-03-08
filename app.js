const app = Vue.createApp({
    data(){
        return{
            heroHealth: 100 , 
            monsterHealth: 100 , 
            count: 0,
            winner:null , 
            logMessages:[],
            
        }
    },

    methods:{
        specialAttack(){

            this.count++ 

            this.monsterHealth = this.monsterHealth + ( Math.floor(Math.random() * (-10 +15 +1)) - 15);
            console.log(this.monsterHealth);
            const specialAttackValue = ( Math.floor(Math.random() * (-10 +15 +1)) - 15);
            if(this.monsterHealth <= 0){
                this.monsterHealth = 0;
                return 
            }
            this.heroHealth = this.heroHealth  + ( Math.floor(Math.random() * (-3 +10 +1)) - 10);
            if(this.heroHealth <= 0){
                this.heroHealth = 0
                return
            }
            const monsterAttackValue = ( Math.floor(Math.random() * (-3 +10 +1)) - 10)
            this.addLogMessage('your hero' , 'specialattack:', specialAttackValue);
            this.addLogMessage('monster' , 'attack:', monsterAttackValue);

        },
        heroAttack(){

            this.count ++
            this.monsterHealth = this.monsterHealth + ( Math.floor(Math.random() * (-1 +10 +1)) - 10);
            console.log(this.monsterHealth);
            const heroAttackValue=( Math.floor(Math.random() * (-1 +10 +1)) - 10);
            if(this.monsterHealth <= 0){
                this.monsterHealth = 0;
                console.log('you win');
                return 
            }

            this.addLogMessage('your hero' , 'attack:', heroAttackValue);
            this.heroHealth = this.heroHealth  + ( Math.floor(Math.random() * (-3 +10 +1)) - 10);
            console.log(this.heroHealth);
            const monsterAttackValue=( Math.floor(Math.random() * (-1 +10 +1)) - 10);

            if(this.heroHealth <= 0){
                this.heroHealth = 0
                console.log('you lose');
                return
            }
            this.addLogMessage('monster' , 'attack:', monsterAttackValue);
        },

        heal(){
            this.count++ 
            this.heroHealth = this.heroHealth  - ( Math.floor(Math.random() * (-1 +10 +1)) - 10);
            this.heroHealth = this.heroHealth  + ( Math.floor(Math.random() * (-3 +10 +1)) - 10);
            const healValue =-( Math.floor(Math.random() * (-1 +10 +1)) - 10);
            const monsterAttackValue = ( Math.floor(Math.random() * (-3 +10 +1)) - 10)
            this.addLogMessage('your hero' , 'heal', healValue);
            this.addLogMessage('monster' , 'attack:', monsterAttackValue);
            
        },

        surrender(){
            this.heroHealth = 0;
            this.addLogMessage('your hero', 'surrendered' , '')
        },

        addLogMessage(who , what , value ){
            this.logMessages.unshift({
                actionBy: who,
                actionType:what,
                actionValue: value,
                
            }); //unshift come push ma aggiunge un valore all'inizio dell'array
        },
    },

    watch:{
        heroHealth(value) {
            if(value <= 0 && this.monsterHealth <= 0){
                return this.winner = 'draw';
            }else if(value <= 0){
                return this.winner='monster';
            }
        },
        monsterHealth(value) {
            if(value <= 0 && this.heroHealth <= 0){
                return this.winner ='draw'
            }else if(value <= 0){
                return this.winner ='hero'
            }
        }
    }
});
app.mount('#game')