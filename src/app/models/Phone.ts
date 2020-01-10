export class Phone {

    number : string
  
    // format phone numbers as E.164
    get e164() {
      const num = "91" + this.number
      return `+${num}`
    }
  
}