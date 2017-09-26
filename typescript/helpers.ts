class Helpers{

    public titleCase(str: string): string{
        return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
    }

    public randomFromArray(arr: Array<string>): string{
        return arr[Math.floor(Math.random() * arr.length)];
    }

    public randomIntInRange(min: number, max: number): number{
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    public range(n: number): Array<number>{
      let tmp = [];
      for(let i = 0; i  < n; i++){
        tmp.push(i);
      }
      return tmp;
    }
}

const helpers = new Helpers();

export default helpers;
