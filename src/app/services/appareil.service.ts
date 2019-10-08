export class AppareilService {
  
    appareils = [
        {
          id:1,
          name: 'Iphone',
          status: false
        },
        {
          id:2,
          name: 'Xbox One',
          status: true
        },
        
      ];


      getAppareilById(idTarget:number){
        const appareil = this.appareils.find(
          (appareilObject) => {
            return appareilObject.id ===idTarget;
          }
        );
        return appareil;
      }


      switchOnAll() {
        for(let appareil of this.appareils) 
          appareil.status = true;
    }
    
    switchOffAll() {
        for(let appareil of this.appareils) 
          appareil.status = false;
    }

    switchOnOne(i: number) {
      this.appareils[i].status = true;
      console.log("allume l'appareil a l'index " + i);

  }
  
  switchOffOne(i: number) {
      this.appareils[i].status = false;
      console.log("eteint l'appareil a l'index " + i);
  }
}