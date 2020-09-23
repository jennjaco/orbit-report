export class Satellite {
    name: string;
    type: string;
    launchDate: string;
    orbitType: string;
    operational: boolean;
    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean){
        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
        this.operational = true;
    }
    shouldShowWarning(): boolean {
        this.type = this.type.toLowerCase();
        if (this.type === "space debris"){
            return true
        }else {
            return false
        }
    }
}

